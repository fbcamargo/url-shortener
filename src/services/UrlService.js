const { nanoid } = require("nanoid");
const StoreUrlDto = require("../dtos/StoreUrlDto.js");

class UrlService {
    constructor(urlRepository) {
        this.urlRepository = urlRepository;
    }

    async getByShortId(shortId) {
        return this.urlRepository.getByShortId(shortId);
    }

    async createOrRenew(createUrlDto) {
        const existing = await this.urlRepository.findByOriginalUrl(createUrlDto.url);
        const isExpired = existing && existing.expiresAt <= Date.now();

        if (!existing || isExpired) {
            return this.urlRepository.create(StoreUrlDto.parse({
                originalUrl: createUrlDto.url,
                shortId: this.#generateShortId(5, 10),
                expiresAt: this.#getExpirationDate(),
            }));
        }
        return existing;
    }

    #generateShortId(min, max) {
        const size = Math.random() * (max - min) + min;
        return nanoid(size);
    }

    #getExpirationDate() {
        const now = new Date();
        return new Date(now.setHours(now.getHours() + 24));
    }
}

module.exports = UrlService;
