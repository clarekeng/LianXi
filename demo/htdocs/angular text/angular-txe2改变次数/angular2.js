
var firstController = function($scope){

	$scope.name ='张';
	$scope.count = 0;

	$scope.$watch('name',function(newValue,oldValue){
		++$scope.count;
		if($scope.count>5){
			$scope.name='已经大于5次了';
		}
	});
 }