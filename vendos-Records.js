const productListTemplate = document.querySelector('.recordTemplate');
const productCatergory = document.querySelector('.catergory');
const searchBox = document.querySelector('.searchBox');


showRecords(vendorsRecord);
// pizzas.innerHTML = "<tr><td>1</td><td>2</td><td>3</td><td>4</td></tr>"

function showRecords(list){
const vendorStrings = list.map(function(vprofit){
    let vendorString = `<tr>
        <td>${vprofit.Month}</td>
        <td>${vprofit.EggProfit}</td>
        <td>${vprofit.FruitProfit}</td>
        <td>${vprofit.VegProfit}</td>
        <td>${vprofit.OverallProfit}</td>
        <td>${vprofit.EggPercent}</td>
        <td>${vprofit.FruitPercent}</td>
        <td>${vprofit.VeggiesPercent}</td>
     
    </tr>`
    return vendorString;
  
})
const  htmlCatergories = vendorStrings.join("")

productCatergory.innerHTML = htmlCatergories;

}


searchBox.addEventListener("keyup", function(){
const filterText = searchBox.value;
const filteredRecord = vendorsRecord.filter(function (vprofit){
 return pizza.FruitProfit.includes(filterText) || 
 vprofit.EggProfit.includes(filterText)
});


showRecords(filteredRecord);
});