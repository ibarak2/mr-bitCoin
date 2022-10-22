<template>
    <div class="flex column contact-stats">
        <h5>Name: {{transaction.to}}</h5>
        <h5>Amount: {{transaction.amount}} BTC</h5>
        <h5>Date: {{getDate}}</h5>
    </div>
</template>

<script>
export default {
    props: {
        transaction: {
            type: Object,
            required: true,
        }
    },
    computed: {
        getDate() {
            return new Date(this.transaction.timeStamp).toLocaleString()
        }
    }
}
</script>

<style lang="scss">
.contact-stats{
    border: 1px solid rgb(238, 238, 238);
    border-radius: 6px;
    padding: 0.2em;
}
</style>
