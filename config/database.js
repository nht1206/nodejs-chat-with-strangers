//config/database.js
let userDB = 'your db user'
let passDB = ''
const urlConnect = `mongodb://${userDB}:${passDB}.....` //your url login
let getUrl = () => {
    return urlConnect
}
module.exports = {
    getUrl: getUrl
}