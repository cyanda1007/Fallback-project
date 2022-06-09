function Calculate(){
    let eggTray = 50;
    let eggAmount = 30;
    let fruitBunch = 40;
    let fruitAmount = 30;

 function eggProfit(eggsold){
 
let pricePerEgg = 3;
let profit = (pricePerEgg - eggTray/eggAmount) * eggsold

let percentage = ((eggTray/eggAmount)/pricePerEgg) * 100

return  [`R${profit}`, percentage.toFixed(2)]

}

function fruitProfit(fruitsold){
 
    let pricePerfruit = 2;
   let fruitprofit = (pricePerfruit - fruitBunch/fruitAmount) * fruitsold
   
   let percentages = ((fruitBunch/fruitAmount)/pricePerfruit) * 100
   
   return  [`R${fruitprofit}`, percentages.toFixed(2)]
   
   }
   

return{
eggProfit,
fruitProfit
}

}