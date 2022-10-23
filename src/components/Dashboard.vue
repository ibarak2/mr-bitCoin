<template>
  <section>
      <h1>Dashboard</h1>
    <div class="flex main-dashboard">
        <div class="flex column block-stats">
            <div class="flex space-between">
                <BitcoinPrice />
                <AvgBlockSize />
            </div>
            <div v-if="getLoggedinUser.transactions.length">
                <TransactionList :transactions="getLoggedinUser.transactions" />
            </div>
        </div>
        <div class="market-chart">
            <Chart />
        </div>
    </div>
  </section>
</template>

<script>
import { bitcoinService } from '../services/bitcoin-service';
import Chart from './Chart.vue';
import BitcoinPrice from './BitcoinPrice.vue';
import AvgBlockSize from './AvgBlockSize.vue';
import TransactionList from './TransactionList.vue';

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
    computed: {
        getLoggedinUser() {
            return this.$store.getters.loggedinUser
        }
    },
    components: { Chart, BitcoinPrice, AvgBlockSize, TransactionList }
}

</script>

<style lang="scss" scoped>
.main-dashboard{
    gap:1em;
    margin: 0 1em;
}
h1 {
    text-align: center;
    font-size: 3em;
    margin: 1em 0 ;
}
.market-chart {
    width: 50%;
    margin: 0 0 auto;
}
.block-stats{
    width: 50%;
    
}
</style>