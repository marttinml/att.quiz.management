/* global angular*/
(function () {
    var Controller = function ($scope, $internal, $window) {

        $scope.titulo = $internal.encuesta.titulo;
        $scope.descripcion = $internal.encuesta.descripcion;
        $scope.autor = $internal.encuesta.autor;
        $scope.direccion = $internal.encuesta.direccion;
        $scope.valides = $internal.encuesta.valides;
        $scope.tiempo = $internal.encuesta.tiempo;
        $scope.tipoEncuesta = $internal.encuesta.tipoEncuesta;
        $scope.preguntas = $internal.preguntas;
        
        
        $scope.publicar = function () {
            $window.location = '#/generar';
        };
        
        $scope.cerrar = function () {
            $window.location = '#/crear';
            $internal.preguntas = [
                {
                    pregunta: '',
                    respuestas: []
                }
            ];
        };

    };

    Controller.$inject = ['$scope', '$internal', '$window'];
    angular
        .module('resumen')
        .controller('ResumenController', Controller);
})();