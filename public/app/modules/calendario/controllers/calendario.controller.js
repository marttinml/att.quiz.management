/* global angular, moment */
(function(){
    
    var Controller = function($scope, $internal, $window){
        
        $scope.minDate = moment();
        
        $scope.changeDate = function(e, data){
            console.log(data._d);
            $scope.vigencia = data._d;
        };
        
        $scope.aceptar = function (){
            $internal.vigencia = $scope.vigencia;
            $window.location = '#/crear';
        };
    };
    
    Controller.$inject = ['$scope', '$internal', '$window'];
    
    angular
        .module('calendario')
        .controller('CalendarioController', Controller);
})();