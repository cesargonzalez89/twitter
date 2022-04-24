const userService = require('./../models/User')

class UserView{
    static createUser(payload){
        if(payload!=null){

        }else{
            return{error: "payload no existe"}
        }
    }
}

module.exports = UserView