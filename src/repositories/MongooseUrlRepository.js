const Url = require("../models/Url.js");

class MongooseUrlRepository {
    async getByShortId(shortId) {
        const url = await Url.findOne({ shortId });
        if (url) await url.updateOne({ $inc: { clicks: 1 } });
        return url;
    }

    async findByOriginalUrl(url) {
        return Url.findOne({ originalUrl: url }).sort({ _id: -1 });
    }

    async create(data) {
        return Url.create(data);
    }
}

module.exports = MongooseUrlRepository;