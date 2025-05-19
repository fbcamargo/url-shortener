const mongoose = require("mongoose");

async function connect() {
    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('Connected to MongoDB'))
        .catch((e) => console.log(e));
}

module.exports = connect;
