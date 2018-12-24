const User = require(__dirname + "/user.js");
const mongoose = require("mongoose");

module.exports = async (req, res) => {
    const url = process.env.db;
    const options = {
        useNewUrlParser: true,
        connectTimeoutMS: 10000
    };
    mongoose.connect(url, options).then(() => {
        const first = new User({
            name: "Awesome"
        });
        const result = await first.save();
        res.end(JSON.stringify({
            error: false,
            message: result
        }));

    }).catch(e => {
        res.end(JSON.stringify({
            error: true,
            message: e
        }));
    });
};