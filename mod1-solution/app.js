(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject =['$scope'];
  function LunchCheckController($scope){
    $scope.checker = function(){
      $scope.output= "Please enter data first";
      if ($scope.lunchList.length == 0){
        $scope.output= "Please enter data first";
      }else{
        var lunchArr = $scope.lunchList.split(',');
        if (lunchArr.length>3)
        {
          $scope.output="Too Much!";
        }
        else{
          $scope.output="Enjoy!";
        }
      }
    }
  }
})();
