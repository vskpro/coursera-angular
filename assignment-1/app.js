(function(){

  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.checkItems = function(){

      if($scope.items==undefined || $scope.items==="") {

        $scope.message = "Please enter data first.";
        $scope.color = "red";
      } else {

        var items = $scope.items.split(",");

        if(items.length<=3) {
          $scope.message = "Enjoy!";
          $scope.color = "green";


        } else if(items.length>3) {
          $scope.message = "Too much!";
          $scope.color = "green";
        }

      }




    };

  }


})();
