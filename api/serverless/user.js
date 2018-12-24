const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: "Robert"
    }
}, timeStamps: {
    createdAt: "created_at"
});

module.exports = mongoose.model("User", userSchema);