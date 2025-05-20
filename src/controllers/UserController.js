const UrlService = require("../services/UrlService.js");
const MongooseUrlRepository = require("../repositories/MongooseUrlRepository.js");
const CreateUrlDto = require("../dtos/CreateUrlDto.js");
const UrlResponseDto = require("../dtos/UrlResponseDto.js");

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
        const parsed = CreateUrlDto.safeParse(req.body);
        if (parsed.success) {
            const shortUrl = await urlService.createOrRenew(parsed.data);
            const response = UrlResponseDto.parse(shortUrl);
            return res.status(201).json(response);
        } else {
            return res.status(400).json({ error: parsed.error.issues.map((i) => i) });
        }
    }
}

module.exports = UserController;
