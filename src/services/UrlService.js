class UrlService {
    constructor(urlRepository) {
        this.urlRepository = urlRepository;
    }

    async getByShortId(shortId) {
        return this.urlRepository.getByShortId(shortId);
    }

    async createOrRenew(createUrlDto) {
        return this.urlRepository.createOrRenew(createUrlDto);
    }
}

module.exports = UrlService;

