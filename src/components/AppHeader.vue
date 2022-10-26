<template>
  <section class="main-container main-nav">
    <nav class="flex align-center space-between">
      <RouterLink to="/" class="logo">Mr-Bitcoin</RouterLink>

      <div v-if="isLoggedinUser" class="clean-list nav-options">
        <span>Hello {{loggedinUsername}}</span>
        <span>Balance: ({{loggedinBalance}} BTC)</span>
        <div v-if="windowWidth <900">
          <button @click="navOpen=!navOpen" v-bind:class="{active:navOpen}" class="burgir-btn">
            <span class="top"></span>
            <span class="mid"></span>
            <span class="bottom"></span>
          </button>
          <div v-show="navOpen" class="clean-list burgir">
            <RouterLink to="/">Dashboard</RouterLink>
            <RouterLink to="/contacts">Contacts</RouterLink>
            <RouterLink v-on:click="onLogout" to="/loginsignup">Logout</RouterLink>
          </div>
        </div>
        <div v-else class="nav-options">
          <RouterLink to="/">Dashboard</RouterLink>
            <RouterLink to="/contacts">Contacts</RouterLink>
            <RouterLink v-on:click="onLogout" to="/loginsignup">Logout</RouterLink>
        </div>
      </div>
    </nav>
    </section>
</template>

<script>
import router from '../router';

export default {
  data() {
    return {
      loggedinUser: null,
      navOpen: false,
      windowWidth: window.innerWidth
    }
  },
  created() {
    this.loggedinUser = this.$store.getters.loggedinUser
    if (!this.loggedinUser && this.$route.fullPath !== '/loginsignup' ) {
      console.log(this.$route.fullPath);
      router.push('/loginsignup')
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods: {
    onLogout() {
    // userService.logout()
    this.$store.dispatch({type: "logout"})
    router.push('/loginsignup')
    },
    onResize() {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    isLoggedinUser() {
      return this.$store.getters.loggedinUser ? true : false
    },
    loggedinUsername() {
      return this.$store.getters.loggedinUser.username
    },
    loggedinBalance() {
      return this.$store.getters.loggedinUser.balance
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
  display: flex;
  align-items: center;
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

 .burgir {
  position: fixed;
  display: flex;
  flex-direction: column;
  font-size: 1em;
  font-weight: bold;
  width: 200px;
  top: 0;
  right: 0;
  background: grey;
  padding-top: 66px;
  padding-bottom: 66px;
  text-align: center;
  z-index: 10;
  
  // transform: translateX(120px);
  // gap: 2em;
  // @media (min-width:900px) {
  //   position: unset;
  //   flex-direction: row;
  //   gap: 2em;

  // }
 }
 
 .logo {
  color: #0052FF;
  font-size: 1.7em;
  font-weight: bold;
 }

 .burgir-btn {
  display: block;
			width: 50px;
			height: 50px;
			background: grey;
			border: none;
			position: relative;
			z-index: 100;
			appearance: none;
			cursor: pointer;
			outline: none;

			span {
				display: block;
				width: 20px;
				height: 2px;
				margin: auto;
				background: white;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				transition: all .4s ease;

				&.top {
					transform: translateY(-8px);
				}

				&.bottom {
					transform: translateY(8px);
				}
			}
			&.active{
				.top {
					transform: rotate(-45deg);
				}
				.mid{
					transform: translateX(-20px) rotate(360deg);
					opacity: 0;
				}
				.bottom {
					transform: rotate(45deg);
				}
			}
 }
 
</style>