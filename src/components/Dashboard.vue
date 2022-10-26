<template>
  <section>
      <h1>Dashboard</h1>
    <div class="main-dashboard">
        <div class="flex column block-stats">
            <div class="flex blocks">
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
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin: 0 1em;
    gap:1em;
    @media (min-width: 900px ) {
        flex-direction: row;
    }

}
h1 {
    text-align: center;
    font-size: 3em;
    margin: 1em 0 ;
}
.market-chart {
    width: 90%;
    margin: 0 0 auto;
    @media (min-width: 900px ) {
    width: 50%;

    }

}

.block-stats{
    width: 90%;
    & .blocks {
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        @media (min-width: 480px) {
            flex-direction: row;
        }
        @media (min-width: 900px ) {
            justify-content: space-between;

        }
    }

    @media (min-width: 900px ) {
        width: 50%;
    }
    
}
</style>