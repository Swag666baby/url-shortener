import {Router} from "express";
import {urlShorter, redirectToUrl} from "../controllers/urlShorter_controller";
import alphanumericCode from "../utils/alphanumericCode";
const router = Router();

router.post("/shorter", (request, response) => {
  //  try{
        response.send(urlShorter(request.body.url))
   // }catch{
   //     response.send({"error": 500});
   // }
});

router.get("/:alphanumericCode", (req, res) => {
    redirectToUrl(req.params.alphanumericCode, res)
});

export default router;