const UrlService = require("../services/UrlService.js");
const MongooseUrlRepository = require("../repositories/MongooseUrlRepository.js");

const mongooseUrlRepository = new MongooseUrlRepository();
const urlService = new UrlService(mongooseUrlRepository);

class UserController {
    async index(req, res) {
        const { shortId } = req.params;
        const shortUrl = await urlService.getByShortId(shortId);
        if (!shortUrl) return res.sendStatus(404);
        res.redirect(301, shortUrl.originalUrl);
    }

    async create(req, res) {
        const { url } = req.body;
        const shortUrl = await urlService.createOrRenew(url);
        res.status(201).json(shortUrl);
    }
}

module.exports = UserController;
