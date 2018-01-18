angular.module('myApp',[])

.factory('Data',function(){
	return{
		message : "Hello World",
		city : [
			{
				name : '上海',
				py : 'shanghai'
			},
			{
				name : '北京',
				py : 'beijing'
			},
			{
				name : '广州',
				py : 'guangzhou'
			},
			{
				name : '四川',
				py : 'sichuan'
			}
		]
	};
})
.controller('firstController',function($scope,Data,$filter){
	$scope.data = Data;
	$scope.today = new Date;
	var number = $filter('number')(2000);
	console.log(number);
	var jsonString = $filter('json')($scope.data);
	console.log(jsonString);

	$scope.checkName = function(obj){
		if (obj.py.indexOf('h') === -1) 
		{
			return false;
		return true;
		}
	}
})
