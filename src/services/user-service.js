import { storageService } from '@/services/storage.service.js'


export const userService = {
    // signup,
    login,
    logout,
    loggedinUser,
    sendCurrency
}

// login('barak')
// logout()
// loggedinUser()
async function login(username) {
    const loggedinUser = storageService.load('loggedinUser')
    if (!loggedinUser || username !== loggedinUser.username) {
        const newUser = {
            username,
            balance: 100,
            transactions: []
        }
        console.log("new Login!: ", username);
        storageService.save('loggedinUser', newUser)
    } else {
        console.log("logged in:", loggedinUser);
    }
}

function sendCurrency(amount, tragetUser) {
    const loggedinUser = storageService.load('loggedinUser')
    if (loggedinUser.balance < amount) return
    loggedinUser.balance = loggedinUser.balance - amount
    const newTransaction = {
        to: tragetUser,
        amount,
        timeStamp: Date.now()
    }
    loggedinUser.transactions.push(newTransaction)

    storageService.save('loggedinUser', loggedinUser)
    return true
}

function loggedinUser() {
    const loggedinUser = storageService.load('loggedinUser')
    return loggedinUser
}

function logout() {
    localStorage.removeItem('loggedinUser')
}