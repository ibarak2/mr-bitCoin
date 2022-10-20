<template>
  <section class="user-dashboard">
    <!-- <h1>User Dashboard</h1> -->
    <Dashboard />
  </section>
</template>

<script>
import Dashboard from "../components/Dashboard.vue";

export default { components: { Dashboard } }
</script>

<style lang="scss" scoped>
  .user-dashboard {
    background-color: #F9F7F6;
  }
</style>