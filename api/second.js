const express = require("express");
const app = express();

const subRouter = express.Router();
subRouter.get("/", (req, res) => {
    res.status(200).json({
        message: "SubRoute Root."
    });
});

subRouter.get("/deux", (req, res) => {
    res.status(200).json({
        message: "/subroute deux"
    });
});

app.use("/subroute", subRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Base route."
    });
});

app.listen();