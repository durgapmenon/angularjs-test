(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  var toBuy = [
    {
      name: "Milk",
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
    }
  ];
  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var notBought = this;
    var items = ShoppingListCheckOffService.getToBuyItems();
    var notBought.items = items;
    var notBought.empty = (notBought.items.length == 0)? true:false;
    var notBought.display = "Everything is bought.";
    var notBought.markAsBought = function(itemIndex){
      ShoppingListCheckOffService.markAsBought(itemIndex);
    }
  }

  AlreadyBoughtController.$inject=['AlreadyBoughtController'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;
    var alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    var alreadyBought.empty = (alreadyBought.items.length == 0)? true:false;
    var alreadyBought.display = "Nothing Bought Yet";
  }

  function ShoppingListCheckOffService(){
    var service = this;
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
  }
})();
