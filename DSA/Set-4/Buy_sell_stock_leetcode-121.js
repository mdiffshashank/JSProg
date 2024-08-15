/*
You are given an array prices where prices[i] is the price of a given
stock on the ith day.You want to maximize your profit by choosing a 
single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
 If you cannot achieve any profit, return 0.
 */

 /**121. Best Time to Buy and Sell Stock
 */

 //Price minimize , profit maximize 
var maxProfit = function(prices) {
    let profit = 0;
    let min_price = prices[0];
    for(let i=1;i<prices.length;i++){
        profit = Math.max(profit,(prices[i]-min_price))
        min_price = Math.min(min_price,prices[i]);
    }
    return profit
};

console.log(maxProfit([7,2,5,3,6,4,1]));