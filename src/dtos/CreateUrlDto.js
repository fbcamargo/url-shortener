const { z } = require("zod");

const CreateUrlDto = z.object({
    url: z.string({ message: "Informe uma URL" }).url({ message: "URL inválida" }).trim()
});

module.exports = CreateUrlDto;
