/* global angular */

(function () {
    var Directive = function () {
        var Link = function ($scope) {
            $scope.aceptar = function () {
                $scope.accion();
            };
        };
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/ng-alert/ng-alert.template.html',
            link: Link,
            scope: {
                mensaje: '=',
                accion: '='
            }
        };
    };
    var DirectiveError = function () {
        var Link = function ($scope) {
            $scope.$watch('visible', function(){});
            $scope.$watch('aceptar', function(){});
            $scope.$watch('cancelar', function(){});
        };
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/ng-alert/ng-alert-error.template.html',
            link: Link,
            scope: {
                visible: '=',
                titulo: '@',
                cuerpo: '@',
                aceptar: '=',
                cancelar: '='
            }
        };
    };
    angular
        .module('dir.alert', [])
        .directive('ngAlert', Directive)
        .directive('ngAlertError', DirectiveError);
})();