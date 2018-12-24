const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: "Robert"
    }
}, timeStamps: {
    createdAt: "created_at"
});

const User = mongoose.model("User", userSchema);

module.exports = async (req, res) => {
    try {
        const url = process.env.db;
        const options = {
            useNewUrlParser: true,
            connectTimeoutMS: 10000
        };
        await mongoose.connect(url, options)
        const first = new User({
            name: "Awesome"
        });
        const result = await first.save();
        res.end(JSON.stringify({
            error: false,
            message: result
        }));

    } catch (e) {
        res.end(JSON.stringify({
            error: true,
            message: e
        }));
    };
};