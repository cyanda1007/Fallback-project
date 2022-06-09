const domFunction = Calculate();

const EggsProfit = document.querySelector(".eggProfit")
const fruitsProfit = document.querySelector(".fruitprofit")

const  SoldEggsElem = document.querySelector(".eggsold");
const  SoldfruitsElem = document.querySelector(".fruitsold");
const CalculateButtonElem = document.querySelector(".calculateButton")
const percentElem = document.querySelector(".eggPercent")
const fruitpercentElem = document.querySelector(".fruitPercent")
const radioEgg = document.querySelector(".radioEggs");
const radioFruit = document.querySelector(".radioFruit");
const enterButtonElem = document.querySelector(".calculate")

let product = "";
let fruitProduct = "";
var hamburber = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburber.addEventListener("click",function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});

radioEgg.addEventListener("click", ()=>{
    product ='eggs';
})

radioFruit.addEventListener("click", ()=>{
    product ='fruits';
})

CalculateButtonElem.addEventListener('click', ()=>{
   

    if(product === 'eggs'){
     let  profitArray =   domFunction.eggProfit(SoldEggsElem.value)
EggsProfit.value = profitArray[0]
percentElem.value = profitArray[1]  
    }




    if(product === 'fruits'){
  let  fruitprofitArray = domFunction.fruitProfit(SoldfruitsElem.value)
  fruitsProfit.value = fruitprofitArray[0]
  fruitpercentElem.value = fruitprofitArray[1] 
    } 
})