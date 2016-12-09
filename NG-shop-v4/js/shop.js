

(function () {

    let mod = angular.module('shop', ['shop.service']);

    // Controller
    mod.controller('ShopController', function ($scope, productService) {
        // this.product = item;
        //$scope.products = items; // ViewModel
        var promise = productService.loadAll();
        promise.then(function (items) {
            $scope.products = items;
            $scope.message = "";
        }, function (error) {
            $scope.message = error;
        }, function (progress) {
            $scope.message = progress;
        });
    });


    // Filter
    mod.filter('priceDiscount', function () {
        return function (price, discount) {
            if (angular.isNumber(price)) {
                if (discount) {
                    return price - discount;
                } else {
                    return price - 1;
                }
            } else {
                // log Error...
                console.log('not a number');
                return price;
            }
        }
    });

    // Directives

    mod.directive('productTitle', function () {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: 'templates/product-title.html',
            link: function (scope, jqElement, attrs) {
                jqElement.on('mouseenter', function () {
                    jqElement.css('background-color', '#def');
                });
                jqElement.on('mouseleave', function () {
                    jqElement.css('background-color', '#fff');
                });
            }
        };
    });
    mod.directive('productTabs', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-tabs.html',
            //controller:'TabsController'
            controller: function ($scope) {
                $scope.tab = 1; //ng-init="tab=1"
                $scope.changeTab = function (tabIndex) {
                    $scope.tab = tabIndex;
                }
                $scope.isTabSelected = function (tabIndex) {
                    return $scope.tab === tabIndex;
                }
                this.addNewReview = function (product, review) {
                    // send this review-form data to server with product-id ( future work )
                    product.reviews.push(review);
                }
            }
        };
    });
    mod.directive('productReviewForm', function () {
        return {
            restrict: 'E',
            require: '^productTabs',
            templateUrl: 'templates/product-review-form.html',
            link: function (scope, jqElement, attrs, controller) {
                scope.review = {};
                scope.addNewReview = function (product) {
                    controller.addNewReview(product, scope.review);
                    scope.review = {};
                }
            }
        };
    });




})();