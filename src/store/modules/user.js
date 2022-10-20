import { userService } from '@/services/user-service.js'

export default {
    state: {
        loggedinUser: null
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        loggedinUser(state) { return state.loggedinUser }
    }
}