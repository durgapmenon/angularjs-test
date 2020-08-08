(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var notBought = this;
    notBought.items = ShoppingListCheckOffService.getToBuyItems();
    notBought.isEmpty = ShoppingListCheckOffService.isBuyEmpty;
    notBought.display = "Everything is bought.";
    notBought.markAsBought = function(itemIndex){
      ShoppingListCheckOffService.markAsBought(itemIndex);
    };
  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    alreadyBought.isEmpty = ShoppingListCheckOffService.isBoughtEmpty;
    alreadyBought.display = "Nothing Bought Yet";
  }

  function ShoppingListCheckOffService(){
    var service = this;
    var toBuy = [
      {
        name: "Milk Packets",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Whisk",
        quantity: "1"
      },
    ];
    var bought = [];
    service.getToBuyItems = function(){
      return toBuy;
    };
    service.getAlreadyBoughtItems = function(){
      return bought;
    };
    service.markAsBought = function(itemIndex){
        bought.push(toBuy[itemIndex]);
        toBuy.splice(itemIndex,1);
    };
    service.isBuyEmpty = function(){
      return (toBuy.length === 0)? true:false;
    };
    service.isBoughtEmpty = function(){
      return (bought.length === 0)? true:false;
    };
  }
})();
