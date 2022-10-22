<template>
    <section class="transaction-list">
        <h3>Transactions</h3>
        <ul class="flex column clean-list transactions-container">
            <li v-for="transaction in transactions">
                <TransactionPreview :transaction="transaction" />
            </li>
        </ul>
    </section>
  </template>
  
  <script>
  import TransactionPreview from './TransactionPreview.vue';
  
  export default {
    props: {
        transactions: {
            type: Array,
            required: true
        }
    },
    methods: {},
    components: { TransactionPreview }
}
  </script>
  
  <style lang="scss" scoped>
  h3 {
    margin-top: 1.5em;
    text-align: center;
  }
  ul {
    margin-top: 2em;
  }
  li {
    margin-bottom: 0.5em;
  }
  .transactions-container {
    height: 570px;
    overflow-y: auto;
  }
  </style>
  