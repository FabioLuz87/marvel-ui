import md5 from 'md5'

export default function createAuth() {
    const ts = new Date().getTime()
    const privateKey = 'a5a65d0bd2e7f9cf00bdeb18138a6b27fb4602c7'
    const publicKey = '02455f18d45a478239265b6f0d3de650'
    const hash = md5(ts.toString() + privateKey + publicKey)
    return {
        ts,
        apikey: publicKey,
        hash
    }
}