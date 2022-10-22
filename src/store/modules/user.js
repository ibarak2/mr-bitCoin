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
        },
        async sendCurrency({ commit }, { newTransaction }) {
            const send = await userService.sendCurrency(newTransaction.amount, newTransaction.targetUserId)
            if (send) {
                const user = userService.loggedinUser()
                commit({ type: 'setUser', user })
            }
        }
    },
    getters: {
        loggedinUser(state) { return state.loggedinUser }
    }
}