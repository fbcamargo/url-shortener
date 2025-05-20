const { nanoid } = require("nanoid");
const Url = require("../models/Url.js");

class MongooseUrlRepository {
    async getByShortId(shortId) {
        const url = await Url.findOne({ shortId });
        if (url) await url.updateOne({ $inc: { clicks: 1 } });
        return url;
    }

    async createOrRenew(createUrlDto) {
        const existing = await Url.findOne({ originalUrl: createUrlDto.url }).sort({ _id: -1 });
        const isExpired = existing && existing.expiresAt <= Date.now();

        if (!existing || isExpired) {
            return Url.create({
                originalUrl: createUrlDto.url,
                shortId: this.#generateShortId(5, 10),
                expiresAt: this.#getExpirationDate(),
                clicks: 0
            });
        }
        return existing;
    }

    #generateShortId(min, max) {
        const size = Math.random() * (max - min) + min;
        return nanoid(size);
    }

    #getExpirationDate() {
        const now = new Date();
        return now.setHours(now.getHours() + 24);
    }
}

module.exports = MongooseUrlRepository;