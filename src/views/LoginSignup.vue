<template>
  <section class="full login-page-wrapper">
    <div class="flex login-page">
      <div class="flex login-img">
        <img
          src="https://res.cloudinary.com/dalkffrhf/image/upload/v1666183905/mr-bitcoin/cryptocurrency_eiz8sa.png"
          alt=""
        />
      </div>

      <div class="flex login-modal-wrapper">
        <div class="flex login-modal">
          <h1 class="login-title">Welcome Back!</h1>
          <form class="login-form">
            <label for="username" class="login-label">Username</label>
            <input id="username" type="text" placeholder="Username" required />
            <label for="password" class="login-label">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
            />
            <button>Login</button>
          </form>

          <div class="flex divider">
            <div class="divider-line"></div>
            <div class="divider-text">Or</div>
            <div class="divider-line"></div>
          </div>

          <button class="flex google-btn">
            <span>
              <svg
                viewBox="0 0 366 372"
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                class="svg-class google-icon"
              >
                <path
                  d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                  fill="#EA4335"
                ></path>
                <path
                  d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                  fill="#34A853"
                ></path>
              </svg>
            </span>
            <span> Login with Google </span>
          </button>

          <p class="change-form">Not a member? <a>Signup</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.login-page-wrapper {
  min-height: calc(100vh - 215px);
  background-image: url('https://res.cloudinary.com/dalkffrhf/image/upload/v1666183736/mr-bitcoin/blur-gradient-background_xxsw4c.webp');
  background-size: cover;

  .login-page {
    justify-content: space-between;
    align-items: center;
    margin: auto;
    flex-wrap: wrap;
    height: 100%;
    flex: 1;
    max-width: 1250px;

    .login-img {
      padding: 10px;
      transform: translatey(0px);
      animation: float 6s ease-in-out infinite;
      flex: 0.5;
    }

    .login-modal-wrapper {
      height: 100%;
      flex: 0.5;
      align-items: center;
      justify-content: center;
      margin: auto;

      .login-modal {
        box-shadow: 0px 0px 10px 0px #434343;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-radius: 6px;
        height: 60%;
        width: 50%;
        flex: 0.5;

        .login-title {
          font-size: 2rem;
        }

        .login-form {
          > * {
            width: 230px;
          }
          .login-label {
            margin: 10px 0 0;
            padding: 0;
            font-weight: 600;
          }

          input {
            border: 1px solid rgb(200, 200, 200);
            border-radius: 3px;
            padding: 5px;
            margin: 0 0 10px;
            font-family: inherit;

            &:focus {
              outline: none;
              border: 1px solid rgb(60, 60, 60);
            }
          }
          button {
            border-radius: 10px;
            padding: 10px;
            max-width: 250px;
            background-color: rgb(112, 37, 187);
            color: #ffffff;
            transition: all 0.3s;
            font-family: inherit;
            margin-bottom: 0;

            &:hover {
              background-color: darken(rgb(112, 37, 187), 20%);
            }
          }
        }

        .change-form {
          font-weight: 900;

          a {
            color: rgb(130, 130, 225);
            cursor: pointer;
          }
        }
        .divider {
          align-items: center;
          justify-content: center;
          max-width: 230px;
          margin: 5px;
          .divider-line {
            width: 100px;
            border-top: 1px solid rgb(60, 60, 60);
          }
          .divider-text {
            padding: 5px 10px;
          }
        }

        .google-btn {
          background-color: #ffffff;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          width: 230px;
          margin: 0 0 10px;
          font-family: inherit;

          span {
            padding: 5px;
            svg {
              width: 20px;
            }
          }
          transition: all 0.3s;

          &:hover {
            box-shadow: 5px 6px 16px -9px rgba(0, 0, 0, 0.75);
          }
        }
      }
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
