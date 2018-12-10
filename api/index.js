const express = require("express");
const app = express();

app.get("*", (req, res) => {
    res.status(200).json({
        message: "Hello, humans! I came from a server."
    });
});

app.listen();