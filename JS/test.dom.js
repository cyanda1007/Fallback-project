let domFunction = Calculate();
let EggsProfit = document.querySelector(".eggProfit")
let  SoldEggsElem = document.querySelector(".eggsold");
const CalculateButtonElem = document.querySelector(".calculateButton")
let percentElem = document.querySelector(".eggPercent")
var radioEgg = document.querySelector(".radioEggs");
const enterButtonElem = document.querySelector(".calculate")

let product = "";

radioEgg.addEventListener("click", ()=>{
    product = 'eggs';
})
  let objectList = {'profits' : "percent"};

  enterButtonElem.addEventListener('click', ()=>{
alert(JSON.stringify(objectList))
  })


CalculateButtonElem.addEventListener('click', ()=>{
    if(product === 'eggs'){
        let  profitArray =   domFunction.eggProfit(SoldEggsElem.value)
EggsProfit.value = profitArray[0]
percentElem.value = profitArray[1]  
   
objectList.profitArray[0] = profitArray[1];


    }
})