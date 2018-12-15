const express = require("express");
const subRouter = require("./subrouter.js");
const app = express();

app.use("/subroute", subRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Base route."
    });
});

app.listen();