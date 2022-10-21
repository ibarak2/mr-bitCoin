import { userService } from '@/services/user-service.js'

export default {
    state: {
        loggedinUser: userService.loggedinUser()
    },
    mutations: {
        setUser(state, { username }) {
            state.loggedinUser = username
        },
        logout(state) {
            state.loggedinUser = null
        }

    },
    actions: {
        async setUser({ commit }, { username }) {
            commit({ type: 'setUser', username })
        },
        async logout({ commit }) {
            commit({ type: 'logout' })
        }
    },
    getters: {
        loggedinUser(state) { return state.loggedinUser }
    }
}