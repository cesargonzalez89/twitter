const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("Tests for UserService", () => {
        const user = UserService.create(1, "carlogilmar", "Carlo")
        expect(user.userName).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "carlogilmar", "Carlo")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("carlogilmar")
        expect(userInfoList[2]).toBe("Carlo")
        expect(userInfoList[3]).toBe("Sin bio")
    })
})