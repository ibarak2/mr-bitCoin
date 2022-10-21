<template>
  <section class="main-container main-nav">
    <nav class="flex align-center space-between">
      <span class="logo">Mr-Bitcoin</span>

      <div v-if="isLoggedinUser" class="flex align-center clean-list nav-options">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/contacts">Contacts</RouterLink>
        <RouterLink v-on:click="onLogout" to="/loginsignup">Logout</RouterLink>
      </div>
    </nav>
    </section>
</template>

<script>
import router from '../router';
import { userService } from '../services/user-service';

export default {
  data() {
    return {
      loggedinUser: null
    }
  },
  created() {
    this.loggedinUser = this.$store.getters.loggedinUser
    console.log('loggedinUser', this.loggedinUser);
    if (!this.loggedinUser && this.$route.fullPath !== '/loginsignup' ) {
      console.log(this.$route.fullPath);
      router.push('/loginsignup')
    }
  },
  methods: {
    onLogout() {
    userService.logout()
    this.$store.dispatch({type: "logout"})
    }
  },
  computed: {
    isLoggedinUser() {
      return this.$store.getters.loggedinUser ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
 .main-nav {
  height: 66px;
  // background-color: blue;
  border-bottom: 1px solid #ECEFF1;
  color: #050F19;
 }
 .nav-options {
  font-size: 1em;
  font-weight: bold;
  gap: 2em;
  & a {
    color: #050F19;
    :hover {
      cursor: pointer;
    }
  }
 }
 
 .logo {
  color: #0052FF;
  font-size: 1.7em;
  font-weight: bold;
 }
 
</style>