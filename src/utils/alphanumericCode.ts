const bytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
let totalBytes = "";

for(let numberOfBytes: number = 0; numberOfBytes < 7; numberOfBytes++){
    const randomBytes = Math.floor(Math.random() * bytes.length) 
    totalBytes += bytes[randomBytes]
}

export default totalBytes;