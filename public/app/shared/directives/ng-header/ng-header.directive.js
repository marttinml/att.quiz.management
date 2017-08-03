/* global angular */

(function () {
    var Directive = function ($window) {
        var Link = function ($scope) {
            $scope.regresar = function(){
                if ($scope.back){
                    $window.history.back();
                }
            };
        };
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/ng-header/ng-header.template.html',
            link: Link,
            scope: {
                titulo: '@',
                back: '='
            }
        };
    };
    angular
        .module('dir.header', [])
        .directive('ngHeader', Directive);
})();