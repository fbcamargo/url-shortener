class UrlService {
    constructor(urlRepository) {
        this.urlRepository = urlRepository;
    }

    async getByShortId(shortId) {
        return this.urlRepository.getByShortId(shortId);
    }

    async createOrRenew(longUrl) {
        return this.urlRepository.createOrRenew(longUrl);
    }
}

module.exports = UrlService;

