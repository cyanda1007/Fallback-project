function Calculate() {
  let eggTray = 50;
  let eggAmount = 30;
  let fruitBunch = 40;
  let fruitAmount = 30;
  let veggieBunch = 65;
  let veggieAmount = 35;
  const obj = { 
                month: "",
                EggProfit: "",
                FruitProfit:"",
                VegProfit: "",
                OverallProfit: "",
              };
//   localStorage.setItem("items", [[2022, []]]);

  function getYear() {
    const items = localStorage.getItem("items");
    for (let i = 0; i < items.length; i++) {
      if (items[i][1].length < 11) {
        return i;
      }
    }
    return items.length + 1;
  }

  function getMonth() {
    const items = localStorage.getItem("items");
    for (let i = 0; i < items.length; i++) {
        const item = items[i][1];
        for(let j=0; j < item.length; j++){
            if (Object.keys(item[j]).length < 5) {
                return item[j];
              }
        }
    
    }
    return;
  }

  function eggProfit(eggsold) {
    let pricePerEgg = 3;
    let profit = (pricePerEgg - eggTray / eggAmount) * eggsold;

    let percentage = (eggTray / eggAmount / pricePerEgg) * 100;
    obj.EggProfit = percentage
    let eggs = "R" + profit.toFixed(2);
    return [eggs, percentage.toFixed(2)];
  }

  function fruitProfit(fruitsold) {
    let pricePerfruit = 2;
    let fruitprofit = (pricePerfruit - fruitBunch / fruitAmount) * fruitsold;

    let percentages = (fruitBunch / fruitAmount / pricePerfruit) * 100;
    obj.FruitProfit = percentages
    let fruit = "R" + fruitprofit.toFixed(2);
    return [fruit, percentages.toFixed(2)];
  }

  function veggieProfit(veggiesold) {
    // localStorage.setItem();
    let pricePerVeggie = 4;
    let veggiesprofit =
      (pricePerVeggie - veggieBunch / veggieAmount) * veggiesold;

    let percentageS = (veggieBunch / veggieAmount / pricePerVeggie) * 100;
    obj.VegProfit = percentageS
    obj.month = "Jan";
    localStorage.setItem("items", [[2022, [obj]]]);
    console.log(localStorage.getItem("items"))
    let veg = "R" + veggiesprofit.toFixed(2);
    return [veg, percentageS.toFixed(2)];
  }
  //    {
  //     items: {
  //       [
  //         2022,
  //         [
  //           {
  //             month: "January",
  //             EggProfit: "80",
  //             FruitProfit: "70",
  //             VegProfit: "80",
  //             OverallProfit: "400",
  //           }, {
  //             month: "February",
  //             EggProfit: "80",
  //             FruitProfit: "70",
  //             VegProfit: "80",
  //             OverallProfit: "400",
  //           },
  //         ],
  //       ];
  //     }
  //   }

  return {
    eggProfit,
    fruitProfit,
    veggieProfit,
  };
}
