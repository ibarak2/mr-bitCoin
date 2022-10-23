<template>
    <div class="flex column contact-stats">
        <div class="flex item"><span class="item-title">Name:</span><span class="item-content">{{transaction.to}}</span></div>
        <div class="flex item"><span class="item-title">Amount:</span> <span class="item-content">{{transaction.amount}} BTC</span></div>
        <div class="flex item"><span class="item-title">Date:</span> <span class="item-content">{{getDate}}</span></div>
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
    padding: 0.3em;
    background-color: #fff;
}
.item {
    flex: 1;
    .item-title {
        font-weight: bold;
        flex:0.2
    }
    .item-content {
        flex: 0.8;
    }
}
</style>
