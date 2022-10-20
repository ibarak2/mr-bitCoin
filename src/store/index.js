import { createStore } from "vuex";
import user from './modules/user.js'
import contact from './modules/contact.js'

const storeOptions = {
    strict: true,
    state() {
        return {
        }
    },
    mutations: {

    },
    getters: {

    },
    modules: {
        user,
        contact
    }
}

// Create a new store instance.
const store = createStore(storeOptions)
export default store