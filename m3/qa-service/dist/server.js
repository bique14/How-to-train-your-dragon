"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var qa = require("qa-module");
var app = express_1["default"]();
var PORT = 2001;
app.listen(PORT, function () {
    console.log("Server is running on port " + PORT);
});
app.get("/questions", function (_, res) {
    var result = qa.allQuestion();
    res.json(result);
});
app.get("/question", function (req, res) {
    var id = req.query.id;
    try {
        if (!id) {
            throw new Error();
        }
        else {
            var result = qa.getQuestion(id);
            if (!result) {
                throw new Error();
            }
            else {
                res.send(result);
            }
        }
    }
    catch (e) {
        res.sendStatus(404);
        res.end();
    }
});
