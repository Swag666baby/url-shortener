export const alphanumericCode = (): string => {
    const bytes: any[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
    let totalBytes: string = "";

    for(let numberOfBytes: number = 0; numberOfBytes < 7; numberOfBytes++){
        const randomBytes: number = Math.floor(Math.random() * bytes.length) 
        totalBytes += bytes[randomBytes]
    }
    return totalBytes;
}