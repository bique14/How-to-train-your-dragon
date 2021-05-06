"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getQuestion = exports.allQuestion = void 0;
var QA_json_1 = __importDefault(require("./QA.json"));
var allQuestion = function () { return QA_json_1["default"]; };
exports.allQuestion = allQuestion;
var getQuestion = function (id) {
    return allQuestion().filter(function (q) { return q.id === id; })[0];
};
exports.getQuestion = getQuestion;
