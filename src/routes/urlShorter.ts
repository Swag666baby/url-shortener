import {Router} from "express";
import {urlShortener} from "../controllers/urlShortener";
import {redirectToUrl} from "../controllers/redirectToUrl";
const router = Router();

router.post("/shorter", (request, response) => {
    try{
        response.send(urlShortener(request.body.url, request.get("host")))
    }catch{
        response.send({"error": 500});
    }
});

router.get("/:alphanumericCode", (req, res) => {
    redirectToUrl(req.params.alphanumericCode, res)
});

export default router;
