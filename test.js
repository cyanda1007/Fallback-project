function Calculate(){
    let eggTray = 50;
    let eggAmount = 30;
    let fruitBunch = 40;
    let fruitAmount = 30;
    let veggieBunch = 65;
    let veggieAmount = 35;
  

 function eggProfit(eggsold){
 
let pricePerEgg = 3;
let profit = (pricePerEgg - eggTray/eggAmount) * eggsold

let percentage = ((eggTray/eggAmount)/pricePerEgg) * 100
let eggs =  "R" + profit.toFixed(2)
return [eggs, percentage.toFixed(2)]

}

function fruitProfit(fruitsold){
 
    let pricePerfruit = 2;
   let fruitprofit = (pricePerfruit - fruitBunch/fruitAmount) * fruitsold
   
   let percentages = ((fruitBunch/fruitAmount)/pricePerfruit) * 100
   let fruit =  "R" + fruitprofit.toFixed(2)
   return [fruit, percentages.toFixed(2)]
   
   }
   
   function veggieProfit(veggiesold){

       let pricePerVeggie = 4;
       let veggiesprofit = (pricePerVeggie - veggieBunch/veggieAmount) * veggiesold

       let percentageS = ((veggieBunch/veggieAmount)/pricePerVeggie) * 100
    let veg = "R"+ veggiesprofit.toFixed(2)
       return [veg, percentageS.toFixed(2)]

   }




return{
eggProfit,
fruitProfit,
veggieProfit,


}

}