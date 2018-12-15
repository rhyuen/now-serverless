const mongoose = require("mongoose");

module.exports = async (req, res) => {
    try {
        const result = await mongoose.connect(process.env.db, {
            useNewUrlParser: true
        });
        const response = {
            message: result,
            extra: "hi guys"
        };
        res.end(JSON.stringify(response));
    } catch (e) {
        res.end(JSON.stringify({
            err: e,
            extra: "You goofed."
        }));
    }
}