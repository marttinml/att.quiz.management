/* global angular */

(function () {
    var Directive = function () {
        var Link = function ($scope, $element, attr, ngModelController) {
            $scope.show = false;
            $scope.itemSelected = '';
            $scope.open = function(){
                $scope.show = true;
            };
            $scope.close = function(){
                $scope.show = false;
            };
            $scope.select = function(item){
                $scope.itemSelected = item;
                $scope.show = false;
                ngModelController.$setViewValue(item);
                ngModelController.$render();
            };
        };
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/ng-select/ng-select.template.html',
            link: Link,
            require: '?ngModel',
            scope: {
                set: '=',
                titulo:'@'
            }
        };
    };
    angular
        .module('mSelect', [])
        .directive('ngSelect', Directive);
})();