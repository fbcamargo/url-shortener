const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const helmet = require("helmet");

const app = express();
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"]
        }
    },
    frameguard: { action: 'deny'},
    hidePoweredBy: true,
    noSniff: true,
    referrerPolicy: { policy: 'no-referrer' }
}));
app.use(express.json());
app.use("/", routes);

module.exports = app;
