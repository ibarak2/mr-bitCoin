<template>
  <section class="main-container main-footer">
    <div class="flex space-between align-center">
      <div class="flex footer-left">
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
export default {}
</script>

<style lang="scss" scoped>
.main-footer {
  position: relative;
  bottom: 0;
  height: 66px;
  background-color: rgb(240, 240, 240);
}
.footer-left {
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .logo {
    color: #0052ff;
    font-size: 1rem;
    font-weight: bold;
    
    @media (min-width: 900px) {
      font-size: 1.7rem;

    }
  }
}
.social-network {
  gap: 1em;
  font-size: 0.75em;
  @media (min-width: 900px) {
    gap: 2em;
    font-size: 1em;

  }
}
</style>
