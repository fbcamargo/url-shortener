const { z } = require("zod");

const StoreUrlDto = z.object({
    originalUrl: z.string().url(),
    shortId: z.string(),
    expiresAt: z.date(),
    createdAt: z.date().default(new Date()),
    clicks: z.number().default(0)
});

module.exports = StoreUrlDto;
