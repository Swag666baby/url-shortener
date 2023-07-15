import * as express from "express";
import * as bodyParser from "body-parser";
import urlShorter from "./routes/urlShorter";
const app = express();
app.use(bodyParser.json())

app.use("/", urlShorter)

app.listen(3000, () => console.log("server running on port 3000"));