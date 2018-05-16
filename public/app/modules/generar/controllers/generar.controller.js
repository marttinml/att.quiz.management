/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $window, $internal, $encuestas) {

        $rootScope.spin = true;

        var encuesta = new $encuestas();

        $scope.guardar = function () {
            encuesta.titulo         = $internal.encuesta.titulo;
            encuesta.descripcion    = $internal.encuesta.descripcion;
            encuesta.autor          = $internal.encuesta.autor;
            encuesta.direccion      = $internal.encuesta.direccion;
            encuesta.valides        = $internal.encuesta.valides;
            encuesta.vigenciaInicio = $internal.encuesta.vigenciaInicio;            
            encuesta.tiempo         = $internal.encuesta.tiempo;
            encuesta.tipoEncuesta   = $internal.encuesta.tipoEncuesta;
            encuesta.preguntas      = $internal.preguntas;


            console.log(encuesta);
            
            encuesta.valides.setHours(encuesta.valides.getHours() - encuesta.valides.getTimezoneOffset() / 60);
            encuesta.vigenciaInicio.setHours(encuesta.vigenciaInicio.getHours() - encuesta.vigenciaInicio.getTimezoneOffset() / 60);
            
            encuesta
                .$save()
                .then(function (data) {
                    $scope.codigo = data.id;
                    $rootScope.spin = false;
                    $internal.preguntas = [
                        {
                            pregunta: '',
                            respuestas: []
                        }
                    ];
                    console.log(data);
                }, function (e) {
                    $rootScope.spin = false;
                    console.log(e);
                });
        };
        

        $scope.terminar = function () {
            $window.location = '#/';
        };

        $scope.guardar();
    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$internal', '$encuestas'];

    angular
        .module('generar')
        .controller('GenerarCodigoController', Controller);
})();