<template>
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </template>
  
  <script>

  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { bitcoinService } from '../services/bitcoin-service'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'Chart',
    components: { Bar },
    props: {
      chartId: {
        type: String,
        default: 'bar-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      width: {
        type: Number,
        default: 400
      },
      height: {
        type: Number,
        default: 400
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        chartData: {
          labels: [],
          datasets: [ { 
            data: [] 
          } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    },
    async created() {
        this.getMarketPrices()
    },
    methods: {
        async getMarketPrices() {
            const marketPrices = await bitcoinService.getMarketPriceHistory()
            const shortDatesArray = marketPrices.datesArray.slice(marketPrices.datesArray.length - 30)
            const shortPricesArray = marketPrices.pricesArray.slice(marketPrices.pricesArray.length - 30)
            const shortDatesArray1 = shortDatesArray.map(element => {
              return new Date(element * 1000).toLocaleDateString()
            })
            this.chartData = {
                labels: shortDatesArray1,
                datasets: [ {
                  label: 'Bitcoin Price',
                  data: shortPricesArray}]
            }
        }
    },
    
  }
  </script>

<style lang="scss" scoped>
* {
  // margin: 0 3em 3em;
  padding: 1em;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid rgb(238, 238, 238);

  
}
</style>