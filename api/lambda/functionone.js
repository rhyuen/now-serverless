module.exports = (req, res) => {
    res.setHeader("Content-type", "application/json");
    const blah = JSON.stringify({
        message: "Hi it's the awesomest serverless side."
    });
    res.end(blah);
};