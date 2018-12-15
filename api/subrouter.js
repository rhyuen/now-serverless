const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        message: "SubRoute Root."
    });
});

router.get("/deux", (req, res) => {
    res.status(200).json({
        message: "/subroute deux"
    });
});

module.exports = router;