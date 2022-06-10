const productListTemplate = document.querySelector(".recordTemplate");
const productCatergory = document.querySelector(".catergory");
const searchBox = document.querySelector(".searchBox");


showRecords();
function showRecords() {
  //   localStorage.setItem("items", [[2022, []]]);
  const vendor = localStorage.getItem("items");
  console.log(typeof vendor);
 for(vprofit of vendor){
    vprofit[1].map(function (profit_) {
      let vendorString = `<tr>
        <td>${profit_.Month}</td>
        <td>${profit_.EggProfit}</td>
        <td>${profit_.FruitProfit}</td>
        <td>${profit_.VegProfit}</td>
        <td>${profit_.OverallProfit}</td>
     
     
    </tr>`;
      return vendorString;
    });
  };
  const htmlCatergories = vendorStrings.join("");

  productCatergory.innerHTML = htmlCatergories;

//   showRecords(filteredRecord);
}
