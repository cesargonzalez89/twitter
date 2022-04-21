const User =  require("./../../app/models/User")

describe("Unit Test for User class", () => {
    test('create a User Object', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "carlogilmar", "Carlo", "Bio")

        //Aqui validas los resultados de esta codigo
        //Esta es una comparacion que va a igualar el valor de la izquiera con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.userName).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        //expect(user.dateCreated).toBe("dateCreated")
        expect(user.dateCreated).not.toBeUndefined()//Verifica que el valor no sea undefined
        //expect(user.lastUpdated).toBe("lastUpdated")
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Add getters', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        
        expect(user.getUsername).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });

})