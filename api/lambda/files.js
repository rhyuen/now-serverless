const fs = require("fs");

module.exports = (req, res) => {
    fs.readFile(__dirname + "/sample.txt", "utf8", (err, data) => {
        if (err) {
            res.end(JSON.stringify({
                error: true,
                result: err
            }));
        } else {
            res.end(JSON.stringify({
                error: false,
                data: data
            }));
        }
    });
};

function local() {
    fs.readFile(__dirname + "/sample.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
        }
    });
}