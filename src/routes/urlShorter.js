"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var urlShorter_controller_1 = require("../controllers/urlShorter_controller");
var router = (0, express_1.Router)();
router.post("/shorter", function (request, response) {
    //  try{
    response.send((0, urlShorter_controller_1.urlShorter)(request.body.url));
    // }catch{
    //     response.send({"error": 500});
    // }
});
router.get("/:alphanumericCode", function (req, res) {
    (0, urlShorter_controller_1.redirectToUrl)(req.params.alphanumericCode, res);
});
exports.default = router;
