import {writeFileSync, readFileSync} from "fs";
import {alphanumericCode} from "../utils/alphanumericCode";
import SaveData from "../models/saveData_models";

export const urlShortener = (url, host) => {
	const code = alphanumericCode()
	const database: any[] = JSON.parse(readFileSync("database/json/urls.json").toString())
	
    const saveData: SaveData = {
        url: url,
        code: code
    }
    console.log(saveData)
    database.push(saveData)
    writeFileSync("database/json/urls.json", JSON.stringify(database))
    return `http://${host}/${code}`
}
