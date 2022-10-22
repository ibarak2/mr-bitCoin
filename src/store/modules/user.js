import { userService } from '@/services/user-service.js'

export default {
    state: {
        loggedinUser: userService.loggedinUser()
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedinUser = user
        },
        logout(state) {
            state.loggedinUser = null
        }

    },
    actions: {
        async setUser({ commit }) {
            const user = userService.loggedinUser()
            commit({ type: 'setUser', user })
        },
        async logout({ commit }) {
            commit({ type: 'logout' })
        }
    },
    getters: {
        loggedinUser(state) { return state.loggedinUser }
    }
}