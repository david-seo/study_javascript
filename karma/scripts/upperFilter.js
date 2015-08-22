var myApp = angular.module('myApp', []);
 
myApp.filter( 'upperFilter' , function() { 
	return function (input) { 
		return angular.uppercase (input); 
	};
});
