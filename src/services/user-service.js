import { storageService } from '@/services/storage.service.js'


export const userService = {
    // signup,
    login,
    logout,
    loggedinUser
}

// login('barak')
// logout()
// loggedinUser()
async function login(username) {
    const loggedinUser = storageService.load('loggedinUser')
    if (!loggedinUser || username !== loggedinUser) {
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

// async function signup(username) {
//     try {
//         storageService.save('loggedinUser', username)

//     } catch (err) {
//         console.log(err);
//     }
// }

function loggedinUser() {
    const loggedinUser = storageService.load('loggedinUser')
    console.log('loggedinUser', loggedinUser);
    return loggedinUser
}

function logout() {
    localStorage.removeItem('loggedinUser')
}