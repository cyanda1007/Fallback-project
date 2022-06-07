
describe('The Street Vendors Products stat app', function() {

it ('should set the  number of eggs sold', function() {

    const productStats = theProductStats();
    
    productStats.setSoldEggs(10);
   
    assert.equal(10, productStats.getSoldEggs());
  

});
it ('should set the number of fruits sold', function() {

    const productStats = theProductStats();
    
    productStats.setSoldFruits(20);
   
    assert.equal(20, productStats.getSoldFruits());
  

});
it ('should set the number of fruits sold', function() {

    const productStats = theProductStats();
    
    productStats.setSoldVeggies(30);
   
    assert.equal(30, productStats.getSoldVeggies());
  

});


describe("use the values", function(){
    it("use  price set values", function() {
        const productStats = theProductStats();
        productStats.setSoldEggs(10.00);
        productStats.setSoldFruits(12.00);
        productStats.setSoldVeggies(13.00);
        productStats.Eggs();
        productStats.Fruits();
        productStats.Veggies();
  

   assert.equal('R' + 300.00,productStats.getEggsProfit()); 
   assert.equal('R' + 120.00,productStats.getFruitsProfit());
   assert.equal('R' + 130.00,productStats.getVeggiesProfit());
   assert.equal('R' + 550.00,productStats.getOverallProfit());
    });


    it("use  price set values", function() {
        const productStats = theProductStats();
        productStats.setSoldEggs(10.00);
        productStats.setSoldFruits(12.00);
        productStats.setSoldVeggies(13.00);
        productStats.Eggs();
        productStats.Fruits();
        productStats.Veggies();
        productStats.getEggsProfit();
        productStats.getFruitsProfit();
        productStats.getVeggiesProfit();
        productStats.getOverallProfit();


   assert.equal(54.5 + '%',productStats.getEggsPercentProfit()); 
   assert.equal(21.8 + '%',productStats.getFruitsPercentProfit());
   assert.equal(23.6 + '%',productStats.getVeggiesPercentProfit());
 
    });


});


























  

});





