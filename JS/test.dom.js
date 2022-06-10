const domFunction = Calculate();

const EggsProfit = document.querySelector(".eggProfit");
const fruitsProfit = document.querySelector(".fruitprofit");
const veggiesProfit = document.querySelector(".vegprofit");

const SoldEggsElem = document.querySelector(".eggsold");
const SoldfruitsElem = document.querySelector(".fruitsold");
const SoldVeggiesElem = document.querySelector(".vegsold");

const totalProfit = document.querySelector(".overallprofit");

const CalculateButtonElem = document.querySelector(".calculateButton");
const percentElem = document.querySelector(".eggPercent");
const fruitpercentElem = document.querySelector(".fruitPercent");
const veggiePercentElem = document.querySelector(".vegPercent");
const radioEgg = document.querySelector(".radioEggs");
const radioFruit = document.querySelector(".radioFruit");
const radioVeggie = document.querySelector(".radioVeggie");
const enterButtonElem = document.querySelector(".calculate");

let product = "";
let fruitProduct = "";

var hamburber = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburber.addEventListener("click", function () {
  this.classList.toggle("click");
  navlist.classList.toggle("open");
});

let veggieProduct = "";

radioEgg.addEventListener("click", () => {
  product = "eggs";
});

radioFruit.addEventListener("click", () => {
  product = "fruits";
});

radioVeggie.addEventListener("click", () => {
  product = "veggies";
});
let profitForEgg = 0;
let profitForFruit = 0;
let profitForVeggie = 0;

CalculateButtonElem.addEventListener("click", () => {
  if (product === "eggs") {
    let profitArray = domFunction.eggProfit(SoldEggsElem.value);
    let profitNum = Number(profitArray[0].replace("R", ""));
    EggsProfit.value = profitArray[0];
    profitForEgg = profitNum;
    percentElem.value = profitArray[1];
  }

  if (product === "fruits") {
    let fruitprofitArray = domFunction.fruitProfit(SoldfruitsElem.value);
    let profitFruitNum = Number(fruitprofitArray[0].replace("R", ""));
    fruitsProfit.value = fruitprofitArray[0];
    profitForFruit = profitFruitNum;
    fruitpercentElem.value = fruitprofitArray[1];
  }

  if (product === "veggies") {
    let veggieprofitArray = domFunction.veggieProfit(SoldVeggiesElem.value);
    let VeggieProfitNum = Number(veggieprofitArray[0].replace("R", ""));
    veggiesProfit.value = veggieprofitArray[0];
    profitForVeggie = VeggieProfitNum;
    veggiePercentElem.value = veggieprofitArray[1];
  }
  totalProfit.value = profitForEgg + profitForFruit + profitForVeggie;
});
