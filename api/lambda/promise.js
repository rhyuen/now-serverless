const jwt = require("jsonwebtoken");
const util = require("util");
const signToken = util.promisify(jwt.sign);

module.exports = async (req, res) => {
    try {
        res.setHeader("Content-Type", "application/json");
        const secret = "IAMSUPERSECRET";
        const result = await signToken({
            foo: "bar"
        }, secret);
        res.end(JSON.stringify({
            token: result
        }));
    } catch (e) {
        res.end(JSON.stringify({
            token: e
        }));
    }
};