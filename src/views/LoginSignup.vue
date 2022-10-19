<template>
  <section class="full login-page-wrapper">
    <div class="flex login-page">
      <div class="flex login-img">
        <img
          src="https://res.cloudinary.com/dalkffrhf/image/upload/v1666183905/mr-bitcoin/cryptocurrency_eiz8sa.png"
          alt=""
        />
      </div>
      <div class="flex login-modal">
        <h1>Welcome Back!</h1>
        <form>
          <input type="mail" required />
          <input type="password" required />
          <button>Login</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.login-page-wrapper {
  min-height: 90vh;
  background-image: url('https://res.cloudinary.com/dalkffrhf/image/upload/v1666183736/mr-bitcoin/blur-gradient-background_xxsw4c.webp');
  background-size: cover;

  .login-page {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    .login-img {
      padding: 10px;
      width: 30%;
      transform: translatey(0px);
      animation: float 6s ease-in-out infinite;
    }
    .login-modal {
      box-shadow: 0px 0px 7px 0px #000000;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      border-radius: 5px;
      width: 30%;
      height: 30%;
    }
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
