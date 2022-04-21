const User =  require("./../app/User")

describe("Unit Test for User class", () => {
    test('create a User Object', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdated")

        //Aqui validas los resultados de esta codigo
        //Esta es una comparacion que va a igualar el valor de la izquiera con el valor de la derecha (valor esperado)
        expext(user.id).toBe(1)
        expext(user.userName).toBe("carlogilmar")
        expext(user.name).toBe("Carlo")
        expext(user.bio).toBe("Bio")
        expext(user.dateCreated).toBe("dateCreated")
        expext(user.lastUpdated).toBe("lastUpdated")
    });
})