let  domFunction = theProductStats()
const enterButtonElem = document.querySelector(".calculate")
// alert(enterButtonElem)
const CalculateButtonElem = document.querySelector(".calculateButton")

// alert(CalculateButtonElem)




enterButtonElem.addEventListener("click", function () {



// refence input data

    let  SoldEggsElem = document.querySelector(".eggsold");
    //  alert(SoldEggsElem)
    let SoldFruitsElem =document.querySelector(".fruitsold");  
                         
    let SoldVeggiesElem = document.querySelector(".vegsold")  
  
// set input data
    domFunction.setSoldEggs(Number(SoldEggsElem.value));
    domFunction.setSoldFruits(Number(SoldFruitsElem.value));
    domFunction.setSoldVeggies(Number(SoldVeggiesElem.value));
 
   
   
})
// reference calculated data
const EggsProfitElem= document.querySelector(".eggProfit");
const FruitsProfitElem = document.querySelector(".fruitprofit");
const  VeggiesProfitElem = document.querySelector(".vegprofit");
const  OverallProfitElem = document.querySelector(".overallprofit");




CalculateButtonElem.addEventListener("click", function () {
    
    var goodsRadioElem = document.querySelector("input[name='Goods']:checked").value;

//    alert(goodsRadioElem)
    if(goodsRadioElem === "eggs"){
        domFunction.Eggs() 
        EggsProfitElem.value = domFunction.getEggsProfit();
    }
    if(goodsRadioElem === "fruits"){
        
        domFunction.Fruits()  
        FruitsProfitElem.value = domFunction.getFruitsProfit();
    }
    if(goodsRadioElem === "veggies"){
        
        domFunction.Veggies()  
        VeggiesProfitElem.value = domFunction.getVeggiesProfit();
    }


    OverallProfitElem.innerHTML = domFunction.getOverallProfit();
})