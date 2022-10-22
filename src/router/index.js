import { createRouter, createWebHashHistory } from 'vue-router'

import UserDashboard from '../views/UserDashboard.vue'
import Contacts from '../views/Contacts.vue'
import LoginSignup from '../views/LoginSignup.vue'
import AddEdit from '../views/AddEdit.vue'

const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: UserDashboard
    },
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/loginsignup',
      component: LoginSignup
    },
    {
      path: '/contacts/edit',
      component: AddEdit
    },
    {
      path: '/contacts/edit/:id',
      component: AddEdit
    },
  ]
}

const router = createRouter(routerOptions)
export default router
