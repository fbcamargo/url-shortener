const { z } = require("zod");

const UrlResponseDto = z.object({
    id: z.string(),
    originalUrl: z.string().url(),
    shortId: z.string(),
    clicks: z.number().nonnegative(),
    createdAt: z.date(),
    expiresAt: z.date()
});

module.exports = UrlResponseDto;
