/* global angular */

(function () {
    var Directive = function () {
        var Link = function ($scope, $element, attr, ngModelController) {

            for(var i in $scope.set){
                $scope.set[i].select = $scope.set[i].select ? true : false;
            }

            $scope.select = function(item){
                for(var i in $scope.set){
                    $scope.set[i].select = false;
                }
                item.select = true;
                $scope.itemSelected = item;
                $scope.show = false;
                ngModelController.$setViewValue(item);
                ngModelController.$render();
                $scope.onClick()(item);
            };
        };
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/ng-radio-group/ng-radio-group.template.html',
            link: Link,
            require: '?ngModel',
            scope: {
                set: '=',
                onClick:'&?'
            }
        };
    };
    angular
        .module('mRadioGroup', [])
        .directive('ngRadioGroup', Directive);
})();