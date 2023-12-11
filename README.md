<p align="center">
 <img src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png"/>

<img src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

# building 
**• cloning**
```bash
git clone https://github.com/Swag666baby/url-shortener
cd url-shortener 
```

**• running**
```bash
yarn
tsc
node dist/server
```


### example of use 
```javascript 
const axios = require("axios");
async function shortener(){
    const request = await axios.post("http://localhost:3000/shorter", {"url": "https://github.com"})
    console.log(request.data)
}
shortener()

```
