<template>
  <section>
    <h1>Dashboard</h1>
    <!-- <p>{{bitcoinPrices}}</p> -->
    <!-- <p>{{bitcoinPrice}}</p> -->
    <div class="flex space-evenly block-stats">
        <BitcoinPrice />
        <AvgBlockSize />
    </div>
    <div class="market-chart">
        <Chart />
    </div>
  </section>
</template>

<script>
import { bitcoinService } from '../services/bitcoin-service';
import Chart from './Chart.vue';
import BitcoinPrice from './BitcoinPrice.vue';
import AvgBlockSize from './AvgBlockSize.vue';

export default {
    data() {
        return {
            bitcoinPrice: null
        };
    },
    async created() {
        // this.getPrices();
        // this.currentBitcoinPrice()
    },
    methods: {
        async currentBitcoinPrice() {
            this.bitcoinPrice = await bitcoinService.getBitcoinPrice();
        }
    },
    components: { Chart, BitcoinPrice, AvgBlockSize }
}

</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
    margin: 3em 0;
}
.market-chart {
    margin: auto;
    width: 400px;
}
.block-stats{
    margin-bottom: 3em;
    
}
</style>