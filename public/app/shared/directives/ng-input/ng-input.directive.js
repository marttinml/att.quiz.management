/* global angular */

(function () {
    var Directive = function () {
        var Link = function ($scope, $element) {
            $scope.style = $scope.set;
        };
        return {
            restrict: 'C',
            templateUrl: 'app/shared/directives/ng-input/ng-input.template.html',
            link: Link,
            scope: {
                set: '@'
            }
        };
    };
    angular
        .module('mInput', [])
        .directive('ngInput', Directive);
})();