import { storageService } from '@/services/storage.service.js'


export const userService = {
    signup,
    login,
    // logout,
    loggedinUser
}

async function login(username) {
    const loggedinUser = storageService.load('loggedinUser')
    console.log(loggedinUser);
}

async function signup(username) {
    try {
        storageService.save('loggedinUser', username)

    } catch (err) {
        console.log(err);
    }
}

function loggedinUser() {

}