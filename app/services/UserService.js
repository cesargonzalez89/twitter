const User = require('./../models/User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    
    static getInfo(user){
        return [user.id, user.userName, user.name, user.bio]
    }

    static updateUserUsername(user, username){
        user.setUsername = username
    }

    static getAllUsernames(users){
        const rUsers = []
        users.forEach(user => rUsers.push(user.userName));
        return rUsers
    }

}

module.exports = UserService