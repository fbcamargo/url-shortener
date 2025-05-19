const mongoose = require("mongoose");

const urlShema = new mongoose.Schema({
    originalUrl: String,
    shortId: String,
    clicks: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: Date
})

module.exports = mongoose.model("Url", urlShema);
