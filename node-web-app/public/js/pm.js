/**
 * http://usejsdoc.org/
 */

(function() {

	var mod = angular.module('pm', []);

	mod.controller('ShopController', function($scope, $http) {

		$scope.loadAll = function() {
			$http.get('/products').then(function(resp) {
				$scope.products = resp.data;
			}, function(reason) {
				$scope.message = reason;
			});
		};

	});

})();