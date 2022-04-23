const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("Tests for UserService", () => {
        const user = UserService.create(1, "carlogilmar", "Carlo")
        expect(user.Username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})