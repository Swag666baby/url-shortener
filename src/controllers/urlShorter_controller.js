"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectToUrl = exports.urlShorter = void 0;
var fs_1 = require("fs");
var alphanumericCode_1 = require("../utils/alphanumericCode");
var bufferFile = (0, fs_1.readFileSync)("./src/database/json/urls.json");
var database = JSON.parse(bufferFile.toString());
var urlShorter = function (url) {
    var saveData = {
        url: url,
        code: alphanumericCode_1.default,
    };
    database.push(saveData);
    (0, fs_1.writeFileSync)("./src/database/json/urls.json", JSON.stringify(database));
    return "http://localhost:3000/".concat(alphanumericCode_1.default);
};
exports.urlShorter = urlShorter;
var redirectToUrl = function (alphanumericCode, response) {
    var element = database.find(function (item) { return item.code == alphanumericCode; });
    if (element)
        response.redirect(301, element.url);
    else
        response.sendStatus(404);
};
exports.redirectToUrl = redirectToUrl;
