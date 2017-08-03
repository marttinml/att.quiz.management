/* global angular*/
(function () {
    
    var Controller = function ($scope, $rootScope) {
        $rootScope.spin = false;
        $rootScope.alert = false;
        $rootScope.mensajeAlerta = "Alerta";
        $rootScope.closeAlert = function(){
            $rootScope.alert = false;
        };
    };
    
    Controller.$inject = ['$scope', '$rootScope'];
    
    angular
        .module('app')
        .controller('AppController', Controller);
})();