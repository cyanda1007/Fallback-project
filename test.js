function Calculate(){
    let eggTray = 50;
    let eggAmount = 30;

 function eggProfit(eggsold){
 
 let pricePerEgg = 3;
let profit = (pricePerEgg - eggTray/eggAmount) * eggsold

let percentage = ((eggTray/eggAmount)/pricePerEgg) * 100

return  [`R${profit}`, percentage.toFixed(2)]

 }

return{
eggProfit
}

}