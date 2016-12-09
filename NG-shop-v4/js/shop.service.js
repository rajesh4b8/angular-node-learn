

(function () {

    // Services
    var mod = angular.module('shop.service', []);
    mod.factory('productService', function ($q, $http) {

        var api = "http://localhost:3000/api/products";

        return {
            loadAll: function () {
                var defer = $q.defer();

                // setTimeout(function () {
                //     defer.resolve([{ name: 'A' }, { name: 'B' }]);
                //     //defer.reject('internal error');
                // }, 5000);
                // setTimeout(function () {
                //     defer.notify('still loading...');
                // }, 2000);

                var promise = $http.get(api);
                promise.then(function (resp) {
                    defer.resolve(resp.data);
                });

                return defer.promise;
            }
        };

    });


})();