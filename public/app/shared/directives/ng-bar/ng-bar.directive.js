/* global angular, Snap */

(function () {
    var Directive = function ($timeout) {
        var Link = function ($scope, $element) {
            $element[0].style.width = '100%';
            $element[0].style.height = 'auto';

            $scope.speed = 1000;
            $scope.size = {
                width: 355,
                height: 50
            };

            $scope.paper = Snap($element[0].children[0]);
            // Configure the viewBox
            $scope.paper
                .attr({
                    'viewBox': '0 0 ' + $scope.size.width + ' ' + $scope.size.height
                });
            //Create the background
            $scope.background = $scope.paper
                .rect(0, 0, $scope.size.width, $scope.size.height, 25, 25)
                .attr({
                    fill: '#D8D8D8',
                    opacity: 0.5
                });

            // Create the fill
            $scope.fill = $scope.paper
                .rect(0, 0, $scope.size.width * (($scope.percent > 50 ? $scope.percent : ($scope.percent + 10)) / 100), $scope.size.height, 25, 25)
                .attr({
                    fill: $scope.color
                });

            // $watch the percent
            $scope.$watch('percent', function (nueva, antigua) {
                // Fix the percent
                var percent = $scope.percent;
                if ($scope.percent < 50) {
                    percent = $scope.percent + 10;
                }
                // Animate the percent width = totalWidth * (percent / 100)
                $timeout(function () {
                    $scope.fill
                        .animate({
                            width: $scope.size.width * (percent / 100)
                        }, $scope.speed);
                }, 1500);

                $scope.paper
                    .text(8, 33, $scope.percent + '%')
                    .attr({
                        'fill': '#fff',
                        'font-size': '23px',
                        'font-weight': '300'
                    });
            });
        };
        return {
            restrict: 'A',
            template: '<svg></svg>',
            link: Link,
            scope: {
                percent: '=',
                color: '='
            }
        };
    };
    angular
        .module('dir.bar', [])
        .directive('ngBar', Directive);
})();