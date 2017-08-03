/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $window, $preguntas, $internal) {

        $scope.muestraAlerta = false;

        $scope.cancelaAlerta = function () {
            $scope.muestraAlerta = false;
        };

        $scope.aceptaAlerta = function () {
            $preguntas.removePregunta();
            $scope.atras();
            $scope.init();
            $scope.muestraAlerta = false;
        };

        // Cierra todo y resetea
        $scope.cerrar = function () {
            $window.location = '#/crear';
            $preguntas.preguntas = [
                {
                    pregunta: '',
                    respuestas: $internal.respuestasSatisfaccion
                }
            ];
        };
        $scope.muestraAlertaFinal = false;

        $scope.cancelaAlertaFinal = function () {
            $scope.muestraAlertaFinal = false;
        };

        $scope.aceptaAlertaFinal = function () {
            $window.location = '#/categorias';
            $preguntas.preguntas = [
                {
                    pregunta: '',
                    respuestas: []
                }
            ];
            $scope.muestraAlertaFinal = false;
        };

        // Cierra todo y resetea
        $scope.cerrar = function () {
            $scope.muestraAlertaFinal = true;
        };
        // Se setea la primera pregunta
        $preguntas.preguntas = [{
            pregunta: '',
            respuestas: $internal.respuestasSatisfaccion
                }];

        // Cambia al navegar entre las preguntas
        $scope.preguntaActual = 0;


        $scope.init = function () {
            $scope.preguntas = $preguntas.getAll();
            $scope.numeroPreguntas = $preguntas.getAll().length;
            $scope.backDisabled = $preguntas.getBackDisabled();
            $scope.nextDisabled = $preguntas.getNextDisabled();
            $scope.eliminarDisabled = $preguntas.getEliminarDisabled();
            $preguntas.preguntaActual = $scope.preguntaActual;
        };

        // Inicializa preguntas, navegación & pregunta actual
        $scope.init();

        // Agregar pregunta
        $scope.agregarPregunta = function () {
            $preguntas.addPregunta({
                pregunta: '',
                respuestas: $internal.respuestasSatisfaccion
            });
            $scope.siguiente();
            $scope.init();
        };

        // Borrar pregunta
        $scope.removerPregunta = function () {
            if ($scope.eliminarDisabled) {

            } else {
                $scope.muestraAlerta = true;
            }
        };

        // Siguiente
        $scope.siguiente = function () {
            if ($scope.preguntaActual < ($preguntas.getAll().length - 1)) {
                $scope.preguntaActual++;
                $preguntas.preguntaActual++;
            }
            $scope.init();
        };

        // Atrás
        $scope.atras = function () {
            if ($scope.preguntaActual > 0) {
                $scope.preguntaActual--;
                $preguntas.preguntaActual--;
            }
            $scope.init();
        };

        $scope.generar = function () {
            $internal.preguntas = $preguntas.getAll();
            console.log($internal.preguntas);
            if ($internal.encuesta.titulo) {
                if ($preguntas.canUploadPreguntas($internal.preguntas)) {
                    $window.location = '#/resumen';
                } else {
                    $rootScope.alert = true;
                    $rootScope.mensajeAlerta = "Las preguntas no pueden ir vacías.";
                }
            } else {
                $rootScope.alert = true;
                $rootScope.mensajeAlerta = "Parece que hay un error en la encuesta.";
            }
        };


    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$preguntas', '$internal', '$satisfaccion'];

    angular
        .module('preguntas')
        .controller('PreguntasController', Controller);
})();