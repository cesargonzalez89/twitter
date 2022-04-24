const User = require('./../models/User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    
    static getInfo(user = new User()){
        return [user.id, user.userName, user.name, user.bio]
    }

    static updateUserUsername(user = new User(), username){
        user.setUsername = username
    }

}

module.exports = UserService