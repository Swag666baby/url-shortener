import {readFileSync} from "fs";

export const redirectToUrl = (alphanumericCode, response) => {
	const database: any[] = JSON.parse(readFileSync("database/json/urls.json").toString())
    const element = database.find((item) => item.code == alphanumericCode);
    if(element) response.redirect(301, element.url)
    else response.sendStatus(404)
}