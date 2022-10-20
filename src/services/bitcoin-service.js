import axios from 'axios'

export const bitcoinService = {
    getMarketPriceHistory,
    getBitcoinPrice,
    getAverageBlockSize
}


async function getMarketPriceHistory() {
    const marketPrices = await axios.get("https://api.blockchain.info/charts/market-price?cors=true")
    const pricesArray = marketPrices.data.values.reduce((acc, curr) => {
        acc.push(curr.y)
        return acc
    }, [])
    const datesArray = marketPrices.data.values.reduce((acc, curr) => {
        acc.push(curr.x)
        return acc
    }, [])
    return { pricesArray, datesArray }
}

async function getBitcoinPrice() {
    const bitcoinPrice = await axios.get("https://blockchain.info/ticker?cors=true")
    return bitcoinPrice.data.USD.last
}


async function getAverageBlockSize() {
    const blockSize = await axios.get("https://api.blockchain.info/charts/avg-block-size?cors=true")
    return blockSize.data.values[blockSize.data.values.length - 1].y.toFixed(2)
}