

(function () { 

    let mod = angular.module('shop', []);

    // Model
    let items = [{
        name: 'Laptop',
        price: 198000,
        desc: 'Mac Pro',
        canBuy: true,
        notAvailable: false,
        images: [{ thumb: '', full: 'images/Laptop.png' }],
        make: Date.now(),
        discount:100000
    },
    {
        name: 'Mobile',
        price: 19000,
        desc: 'some mobile',
        canBuy: true,
        notAvailable: false,
        images: [{ thumb: '', full: 'images/Mobile.png' }],
        make: Date.now(),
        discount:0
    }];


    // Controller
    
    mod.controller('ShopController', function ($scope) { 
        // this.product = item;
        $scope.products = items; // ViewModel
    });

    // Filter
    mod.filter('priceDiscount', function () {
        return function (price,discount) {
            if (angular.isNumber(price)) {
                if (discount) {
                    return price - discount;
                } else {
                    return price -1;
                }    
            } else {
                // log Error...
                console.log('not a number');
                return price;
            }    
        }
    });




})();