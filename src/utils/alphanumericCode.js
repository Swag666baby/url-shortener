"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
var totalBytes = "";
for (var numberOfBytes = 0; numberOfBytes < 7; numberOfBytes++) {
    var randomBytes = Math.floor(Math.random() * bytes.length);
    totalBytes += bytes[randomBytes];
}
exports.default = totalBytes;
