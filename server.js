require("dotenv").config();
const connect = require("./src/config/database.js");
const app = require("./src/app.js");
const PORT = process.env.PORT || 3000;

async function bootstrap() {
    await connect();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

bootstrap();
