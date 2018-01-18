// var firstController = function($scope){
// 	$scope.name = "张三";
// 	$scope.age = 20;
// }
var firstController = function($scope){
	$scope.date = new Date();
	setInterval(function(){
		$scope.$apply(function(){	
			$scope.date = new Date();
		})
	},1000)
}
