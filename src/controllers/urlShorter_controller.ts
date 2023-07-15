import {writeFileSync, readFileSync} from "fs";
import alphanumericCode from "../utils/alphanumericCode";
import SaveData from "../models/saveData_models";
const bufferFile: Buffer = readFileSync("./src/database/json/urls.json")
const database: SaveData[] = JSON.parse(bufferFile.toString());

export const urlShorter = (url) => {
    const saveData: SaveData = {
        url: url,
        code: alphanumericCode,
    }
    database.push(saveData)
    writeFileSync("./src/database/json/urls.json", JSON.stringify(database))
    return `http://localhost:3000/${alphanumericCode}`
}
export const redirectToUrl = (alphanumericCode, response) => {
    const element = database.find((item) => item.code == alphanumericCode);
    if(element) response.redirect(301, element.url)
    else response.sendStatus(404)
}