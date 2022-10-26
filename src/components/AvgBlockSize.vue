<template>
    <section class="bitcoin-block">
      <h5>Average Block Size (MB)</h5>
      <h3 v-if="bitcoinAvgSize">${{bitcoinAvgSize}}</h3>
      <h6>MB</h6>
      <p>The average blcok size over the past 24 hours in megabytes</p>
    </section>
  </template>
  
  <script>
import { bitcoinService } from '../services/bitcoin-service';

  
  export default {
    data() {
        return {
            bitcoinAvgSize: null
        }
    },
    async created() {
        this.getBitcoinAvgSize()
    },
    methods: {
        async getBitcoinAvgSize() {
            this.bitcoinAvgSize = await bitcoinService.getAverageBlockSize()
        }
    },
    computed: {

    }
  }
  </script>
  <style lang="scss" scoped>
  .bitcoin-block {
    background-color: #fff;
    text-align: center;
    height: 160px;
    width: 180px;
    padding: 16px;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 6px;

    @media (min-width: 1300px) {
        height: 210px;
        width: 266px;

        & h5 {
            font-size: 1em;
            margin-bottom: 3em;
        }
        & h3 {
            font-size: 1.85em;
        }
        & h6 {
            font-size: 0.875rem;
            margin-bottom: 1.7em;
        }
        & p {
            font-size: 0.8rem;
            
        }
    }

    & h5 {
        font-size: 0.75em;
        font-weight: 600;
        margin-bottom: 1em;
    }
    & h3 {
        font-size: 1.2em;
        color: rgb(61, 137, 245);
        font-weight: 600;
        margin-bottom: 0.2em;

    }
    & h6 {
        font-size: 0.7rem;
    font-weight: 400;
    color: rgb(61, 137, 245);
    margin-bottom: 1em;

    }
    & p {
        font-size: 0.7rem;
        color: rgb(153, 153, 153);
        font-weight: 500;
    }
  }
  </style>