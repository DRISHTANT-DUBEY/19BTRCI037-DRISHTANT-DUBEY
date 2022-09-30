const express = require("express");
const minPrefix = require("./min_prefix");
const app = express();

const checkWords = ["bonfire", "cardio", "case", "character", "bonsai"];

app.get("/prefixes", (req, res) => {
    const words = req.query.keywords.split(",");
    let returnData = [];

    words.forEach((word) => {
        const checkWordObject =
            checkWords.indexOf(word) > -1
                ? {
                    keyword: word,
                    status: "found",
                    prefix: minPrefix(word, checkWords)
                }
                : { keyword: word, status: "not_found", prefix: "not_applicable" };
        returnData = [...returnData, checkWordObject];
    });
    res.send(returnData);
});

app.listen(5000, () => {
    console.log("Server running successfully");
});