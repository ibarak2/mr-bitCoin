<template>
  <AppHeader />
  <main class="main-container main-content">
    <RouterView />
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss">
.main-content {
  min-height: calc(100vh - 130px);
}
</style>
