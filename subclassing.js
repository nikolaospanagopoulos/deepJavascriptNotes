function userCreator(name, score) {
    const newUser = Object.create(userFunctions)
    newUser.name = name
    newUser.score = score
    return newUser
}



var userFunctions = {
    sayName: function () {
        console.log('I am ' + this.name)
    },
    increment: function () {
        this.score++
    }
}


const user1 = userCreator('Phil', 1)


user1.sayName()



function paidUserCreator(paidName, paidScore, accountBalance) {
    const newPaidUser = userCreator(paidName, paidScore)
    Object.setPrototypeOf(newPaidUser, paidUserFunctions)
    newPaidUser.accountBalance = accountBalance
    return newPaidUser
}



var paidUserFunctions = {
    increaseBalance : function () {
        this.accountBalance++
    }
}


Object.setPrototypeOf(paidUserFunctions,userFunctions)


const paidUser1 = paidUserCreator('nikos',30,50)

paidUser1.sayName()