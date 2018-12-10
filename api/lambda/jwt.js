const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const secret = "IAMSUPERSECRET";
    const token = jwt.sign({
        foo: "bar"
    }, secret);
    res.end(JSON.stringify(token));
}