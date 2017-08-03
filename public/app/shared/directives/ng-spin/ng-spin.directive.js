/* global angular */

(function () {
    var Directive = function () {
        var Link = function ($scope) {
            $scope.style = $scope.set;
        };
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/ng-spin/ng-spin.template.html',
            link: Link
        };
    };
    angular
        .module('dir.spin', [])
        .directive('ngSpin', Directive);
})();