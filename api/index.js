const express = require("express");
//const subRouter = require(__dirname + "/subrouter.js");
const app = express();

//app.use("/subroute", subRouter);


app.get("/second", (req, res) => {
    res.status(200).json({
        message: "MURP"
    });
});
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Base route."
    });
});

app.listen();