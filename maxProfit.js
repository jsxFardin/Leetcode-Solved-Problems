const maxProfit = function (prices) {
    let max = 0
    let minPrice = Infinity

    for (const price of prices) {
        minPrice = Math.min(price, minPrice)
        max = Math.max(max, price - minPrice)
    }
    return max
}


let output = maxProfit([7, 6, 4, 5]);

console.log(output);