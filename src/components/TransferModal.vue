<template>
  <section class="transfer-modal">
    <div class="from-logged">
      <h2>From:</h2>
      <h3>{{ loggedinUser.username }}</h3>
    </div>

    <div class="bit-transfer">
      <img v-bind:src="ff" class="trasfer-arrow" />
      <input
        v-model="amount"
        type="number"
        class="trasnfer-input"
        placeholder="insert amount"
      />
    </div>

    <div class="to-selected">
      <h2>To:</h2>
      <h3>{{ contact.name }}</h3>
    </div>

    <div class="summery">
      <p class="summery-text">
        <span>{{ amount }}</span> BTC
      </p>
      <button v-on:click="onAccept" class="btn btn-accept">Accept</button>
      <button v-on:click="onCloseModal" class="btn btn-cancel">Cancel</button>
    </div>
  </section>
</template>

<script>
import shortImgsUrl from '@/assets/imgs/imgs.js'

export default {
  data() {
    return {
      ff: shortImgsUrl.ff,
      amount: null,
    }
  },
  methods: {
    onAccept() {
      if (!this.amount || this.amount > this.loggedinUser.balance) return
      this.$emit('send-currency', this.amount)
    },
    onCloseModal() {
      this.$emit('close-modal')
    },
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser
    },
    contact() {
      return this.$store.getters.contact
    },
  },
}
</script>

<style lang="scss" scoped>
.transfer-modal {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr) 220px;
  width: 100%;
  height: 400px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(237, 237, 237);
  border: 5px solid rgba(194, 194, 194, 0.5);
  border-radius: 10px;
  transition: all 0.3s;
  
  @media (min-width: 800px) {
    width: 700px;
    
  }

  > * {
    justify-self: center;
    align-self: center;
  }
  h2 {
    margin-bottom: 1rem;
    text-decoration: underline;
  }
  .from-logged {
    grid-area: 1 / 1 / 3 / 2;
  }

  .bit-transfer {
    grid-area: 1 / 2 / 3 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .trasfer-arrow {
      width: 50px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .trasnfer-input {
      text-align: center;
      outline: none;
      border: 1px solid rgb(155, 155, 155);
      border-radius: 4px;
      padding: 5px;
      width:80%;

      @media (min-width: 800px) {
        width:100%;
      }

      &:focus {
        border: 1px solid black;
      }
    }
  }

  .to-selected {
    grid-area: 1 / 3 / 3 / 4;
  }

  .summery {
    grid-area: 3 / 1 / 4 / 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .summery-text {
      font-weight: bold;
    }
    .btn {
      border-radius: 4px;
      padding: 10px 20px;
      transition: all 0.3s;
    }
    .btn-accept {
      font-weight: bold;
      &:hover {
        background-color: darken(#c4fffe, 20%);
      }
    }
    .btn-cancel {
      background-color: transparent;
      border: 1px solid rgb(140, 140, 140);

      &:hover {
        color: #fff;
        background-color: rgb(148, 148, 148);
      }
    }
  }
}
</style>
