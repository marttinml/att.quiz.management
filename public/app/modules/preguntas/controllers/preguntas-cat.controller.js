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

        $preguntas.preguntas = [{
            pregunta: '',
            respuestas: resetCategorias()
        }];

        // Cambia al navegar entre las preguntas
        $scope.preguntaActual = 0;


        $scope.init = function () {
            $scope.preguntas = $preguntas.getAll();
            $scope.backDisabled = $preguntas.getBackDisabled();
            $scope.nextDisabled = $preguntas.getNextDisabled();
            $preguntas.preguntaActual = $scope.preguntaActual;
            $scope.numeroPreguntas = $preguntas.getAll().length;
            $scope.eliminarDisabled = $preguntas.getEliminarDisabled();
            $scope.categorias = $internal.categorias;
        };

        // MARK: - Resetea las categorias cuando se agrega una nueva pregunta
        function resetCategorias() {
            var array = [];
            for (var i = 0; i < $internal.categorias.length; i++) {
                array.push({
                    id: i,
                    categoria: $internal.categorias[i].categoria,
                    respuesta: ''
                });
            }
            return array;
        }

        // Inicializa preguntas, navegación & pregunta actual
        $scope.init();

        // Agregar pregunta
        $scope.agregarPregunta = function () {
            $preguntas.addPregunta({
                pregunta: '',
                respuestas: $scope.categorias
            });
            $internal.categorias = resetCategorias();
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

        function isValid() {
            var flag = true;
            for (var i = 0; i < $internal.preguntas.length; i++) {
                for (var j = 0; j < $internal.preguntas[i].respuestas.length; j++) {
                    console.log($internal.preguntas[i].respuestas[j].respuesta);
                    if ($internal.preguntas[i].respuestas[j].respuesta === '') {
                        flag = false;
                    }
                }
            }
            return flag;
        }


        $scope.generar = function () {
            $internal.preguntas = $preguntas.getAll();
            console.log($internal.preguntas);
            if ($internal.encuesta.titulo) {
                if (isValid()) {
                    if ($preguntas.canUploadPreguntas($internal.preguntas)) {
                        $window.location = '#/resumen';
                        console.log('generar');
                    } else {
                        $rootScope.alert = true;
                        $rootScope.mensajeAlerta = "Las preguntas no pueden estar vacías.";
                        console.log('pregunta vacia');
                    }
                } else {
                    $rootScope.alert = true;
                    $rootScope.mensajeAlerta = "Debes llenar todas las respuestas para cada categoría.";
                    console.log('categoria vacia');
                }
            } else {
                $rootScope.alert = true;
                $rootScope.mensajeAlerta = "Parece que hay un error en la encuesta.";
                console.log('encuesta vacia');
            }
        };


    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$preguntas', '$internal'];

    angular
        .module('preguntas')
        .controller('PreguntasCatController', Controller);
})();