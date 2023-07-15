"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var urlShorter_1 = require("./routes/urlShorter");
var app = express();
app.use(bodyParser.json());
app.use("/", urlShorter_1.default);
app.listen(3000, function () { return console.log("server running on port 3000"); });
