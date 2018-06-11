//helper/index.js
const chatfuel = require('../config/chatfuel')
const Users = require('../models/users')
const request = require('request')
let sendMessage = (userID, mess) => {
    request({

        url: `https://api.chatfuel.com/bots/${chatfuel.botID}/users/${userID}/send?chatfuel_token=${chatfuel.token}&chatfuel_message_tag=SHIPPING_UPDATE&chatfuel_block_name=${chatfuel.blockName}`,
        method: 'POST',
        json: { res_text: mess }
      }, function(error, response, body){
        if (error) {
            return console.log(error)
        }
        console.log(body)
      })
}
let checkMess = async (mess) => {
    let check = ['đmm','dmm','lồn','buồi','địt','mẹ mày','fuck','vl','cặc','đm','dm','đjt','djt','đkm','dkm','đcm','dcm','cái địt mẹ mày','lồn','buồi','địt','mẹ mày','cặc','đệch mẹ','đệch mẹ','vkl','vcl','đụ']
    let fix = ['***','***','***','****','***','** ***','****','**','***','**','**','***','***','***','***','***','***','*** *** ** ***','***','***','***','** ***','***','**** **','**** **','***','***','**']
    for (let i of check.keys()) {
        mess = mess.replace(new RegExp(check[i], 'g'),fix[i])
    }
    return mess
}
/*let setStrangers = async (userID, strangersID) => {
    return Users.findOneAndUpdate(
        {
          userID: userID  // search query
        }, 
        {
          strangersID: strangersID                 // field:values to update
        },
        {
          new: true,                       // return updated doc
          runValidators: true              // validate before update
        })
}*/
module.exports = {
    sendMessage: sendMessage,
    checkMess: checkMess
}