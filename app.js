(function(){
  'use strict';
  angular.module('NameCalculator',[])
  .controller('NameCalculatorController',function($scope){
    $scope.name="";
    $scope.totalValue=0;
    $scope.displayNumeric = function(){
      var totalNameValue = calcNumForString($scope.name);
      $scope.totalValue=totalNameValue;
    };

    function calcNumForString(string){
      var totStringValue = 0;
      for (var i=0;i<string.length;i++){
        totStringValue+=string.charCodeAt(i);
      }
      return totStringValue;
    }
  });
})();
