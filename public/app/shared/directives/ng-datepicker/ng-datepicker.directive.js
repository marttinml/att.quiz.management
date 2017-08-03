/* global angular */

(function () {
    var Directive = function () {
        var Link = function ($scope, $element, $attr, $ngModel) {
            console.log($element[0].children[1]);
            $scope.open = function(){
                document.getElementById("calendar").click();
            };
        };
        return {
            restrict: 'A',
            templateUrl: 'app/shared/directives/ng-datepicker/ng-datepicker.template.html',
            link: Link,
            require: '?ngModel',
            scope: {
                titulo: '@'
            }
        };
    };
    angular
        .module('dir.datepicker', [])
        .directive('ngDatepicker', Directive);
})();