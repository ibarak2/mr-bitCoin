<template>
  <section class="main-container main-footer">
    <div class="flex space-between align-center">
      <div class="flex column">
        <span class="logo">Mr-Bitcoin</span>
        <span>© 2022 Mr-Bitcoin</span>
      </div>
      <div class="flex social-network">
        <a href="" target="_blank">Facebook</a>
        <a href="" target="_blank">Github</a>
        <a href="" target="_blank">LinkedIn</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.main-footer {
  position: relative;
  bottom: 0;
  height: 150px;
  background-color: rgb(240, 240, 240);

}
.logo {
  color: #0052FF;
  font-size: 1.7em;
  font-weight: bold;
 }
 .social-network{
  gap: 2em;
 }
</style>