

(function () { 

    let mod = angular.module('shop', []);

    // Model
    let items = [{
        id:1,
        name: 'Laptop',
        price: 198000,
        desc: 'Mac Pro',
        canBuy: true,
        notAvailable: false,
        images: [{ thumb: '', full: 'images/Laptop.png' }],
        make: Date.now(),
        discount: 100000,
        reviews: [
            { stars: 5, author: 'nag@gmail.com', comment: 'good one' },
            { stars: 1, author: 'ria@gmail.com', comment: 'bad one' }
        ]
    },
    {
        id:2,    
        name: 'Mobile',
        price: 19000,
        desc: 'some mobile',
        canBuy: true,
        notAvailable: false,
        images: [{ thumb: '', full: 'images/Mobile.png' }],
        make: Date.now(),
        discount: 0,
        reviews: [
            { stars: 5, author: 'nag@gmail.com', comment: 'good one' },
            { stars: 1, author: 'ria@gmail.com', comment: 'bad one' }
        ]
    }];


    // Controller
    
    mod.controller('ShopController', function ($scope) { 
        // this.product = item;
        $scope.products = items; // ViewModel


    });

    mod.controller('TabsController', function ($scope) { 
        $scope.tab = 1; //ng-init="tab=1"
        $scope.changeTab=function(tabIndex){
            $scope.tab = tabIndex;
        }
        $scope.isTabSelected=function(tabIndex){
            return $scope.tab === tabIndex;
        }
    });

    mod.controller('ReviewFormController', function ($scope) { 
        $scope.review = {};
        $scope.addNewReview = function (product) {
            // send this review-form data to server with product-id ( future work )
            product.reviews.push($scope.review);
            $scope.review = {};
        }
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