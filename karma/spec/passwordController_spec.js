describe ( 'PasswordController 테스트' , function () {
    beforeEach (module ( 'myApp.controller' ));
 
 	var $controller; 
 	beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));
 
 	describe ( '$scope.grade' , function () {
 		var $scope, controller;
    
    	beforeEach(function () {
        	$scope = {};
        	controller = $controller('PasswordController', {$scope : $scope});
    	});
    	
    	it ( '입력 문자열이 8 자 이상의 긴 암호 강도가 strength가 될' , function () {
       		$scope.password = 'longerthaneightchars' ;
        	$scope.grade();
        	expect ($scope.strength).toEqual('strong');
    	});
 
    	it ( '입력 문자열이 3 자 미만이라고 암호 강도가 weak가' , function () {
        	$scope.password = 'a' ;
        	$scope.grade();
        	expect ($scope.strength).toEqual('weak');
    	});
 	});
 	
 	
});