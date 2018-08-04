var appModule=angular.module('myApp',[]);

appModule.controller("MyCtrl",function($scope){
console.log("Controller called");
$scope.showTooltip=true;
$scope.stopThis=false;

$scope.someFunction=function(stopThis){
	if(stopThis){
		$scope.showTooltip=false;
	}else{
		$scope.showTooltip=true;
	}
}

$scope.enableStopThis=function(showTooltip){
	if(showTooltip){
		$scope.stopThis=false;
	}else{
		$scope.stopThis=true;
	}
}
});