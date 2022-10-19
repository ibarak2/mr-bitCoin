<template>
  <section class="main-container main-nav">
    <nav class="flex align-center space-between">
      <span class="logo">Mr-Bitcoin</span>
      <div class="flex align-center clean-list nav-options">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/contacts">Contacts</RouterLink>
        <RouterLink to="/">Logout</RouterLink>
      </div>
    </nav>
    </section>
</template>

<script>

export default {}
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