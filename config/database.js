//config/database.js
let userDB = 'chat_bot'
let passDB = 'nht1206'
const urlConnect = `mongodb://${userDB}:${passDB}@ds153890.mlab.com:53890/chat_bot`
let getUrl = () => {
    return urlConnect
}
module.exports = {
    getUrl: getUrl
}