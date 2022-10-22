<template>
  <section class="transfer-modal">
    <div class="from-logged">
      <h2>From:</h2>
      <h3>loggedinUser</h3>
    </div>

    <div class="bit-transfer">
      <img v-bind:src="ff" class="trasfer-arrow" />
      <input type="number" class="trasnfer-input" placeholder="insert amount" />
      BTC
    </div>

    <div class="to-selected">
      <h2>To:</h2>
      <h3>selected</h3>
    </div>

    <div class="summery">
      <p><span>X</span> BTC</p> <!-- span is dynamic and reflect the input value -->
      <button class="btn btn-accept">Accept</button>
      <button class="btn btn-cancel">Cancel</button>
    </div>
  </section>
</template>

<script>
import shortImgsUrl from '@/assets/imgs/imgs.js'

export default {
  data() {
    return {
      ff: shortImgsUrl.ff,
    }
  },
}
</script>

<style lang="scss" scoped>
.transfer-modal {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 700px;
  height: 500px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: lightgreen;

  > * {
    border: 1px solid gold;
  }
  .from-logged {
    grid-area: 1 / 1 / 3 / 2;
  }

  .bit-transfer {
    grid-area: 1 / 2 / 3 / 3;
    .trasfer-arrow {
      width: 50px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .to-selected {
    grid-area: 1 / 3 / 3 / 4;
  }

  .summery {
    grid-area: 3 / 1 / 4 / 4;
  }
}
</style>
