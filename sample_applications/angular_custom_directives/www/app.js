var appModule = angular.module('myApp', []);

appModule.controller("MyCtrl", function($scope) {
    console.log("Controller called");
  
    $scope.items = [
        { name: 'Computer', price: 500, condition: 'New', brand: 'Lenovo', published: '01/11/2015' },
        { name: 'Phone', price: 200, condition: 'New', brand: 'Samsung', published: '02/11/2015' },
        { name: 'Printer', price: 300, condition: 'New', brand: 'Brother', published: '06/11/2015' },
        { name: 'Dishwasher', price: 250, condition: 'Second-Hand', brand: 'WhirlPool', published: '01/12/2015' },
    ];
    $scope.onItemSelect = function(name) {
    	console.log(name);
        // alert('Congrats. You have just bought a'+ name);
    }; 
});