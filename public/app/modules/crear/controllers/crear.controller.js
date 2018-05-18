/* global angular, moment */
(function () {

    var Controller = function ($scope, $rootScope, $window, $internal, $encuestas, $direcciones, $tipoEncuesta) {

        $rootScope.spin = true;

        $scope.muestraAlerta = false;

        $scope.cancelaAlerta = function () {
            $scope.muestraAlerta = false;
        };

        $scope.aceptaAlerta = function () {
            $window.location = '#/';
        };

        // $internal.categorias = [
        //     {
        //         id: 0,
        //         name: '',
        //         img: ''
        //     }
        // ];
        $internal.encuesta = {};
        $internal.preguntas = [
            {
                pregunta: '',
                respuestas: []
            }
        ];

        $scope.tiempoAprox = [
            {
                time: 60,
                name: '10 a 30 segundos'
            },
            {
                time: 120,
                name: '30 a 60 segundos'
            },
            {
                time: 180,
                name: '60 a 90 segundos'
            },
            {
                time: 200,
                name: '30 minutos'
            }

        ];

        // Cierra todo y resetea
        $scope.cerrar = function () {
            $scope.muestraAlerta = true;
        };

        $scope.direcciones = $direcciones
            .query(function () {
                $rootScope.spin = false;
            }, function (e) {
                $rootScope.spin = false;
                console.log(e);
            });

        $scope.tipoEncuestaList = $tipoEncuesta
            .query(function () {
                $rootScope.spin = false;
            }, function (e) {
                $rootScope.spin = false;
                console.log(e);
            });

        $scope.titulo = '';
        $scope.descripcion = '';
        $scope.autor = '';
        $scope.direccion = '';
        $scope.vigenciaInicio = '';
        $scope.vigencia = '';
        $scope.duracionPregunta = '';
        $scope.tipoEncuesta = '';
        $scope.timeTemp = '';

        function isValid() {
            if ($scope.titulo === '') {
                return false;
            } else {
                if ($scope.descripcion === '') {
                    return false;
                } else {
                    if ($scope.autor === '') {
                        return false;
                    } else {
                        if ($scope.direccion === '') {
                            return false;
                        } else {
                            if ($scope.vigencia === '') {
                                return false;
                            } else {
                                if ($scope.duracionPregunta === '') {
                                    return false;
                                } else {
                                    if ($scope.tipoEncuesta === '') {
                                        return false;
                                    } else {
                                        if ($scope.timeTemp === '') {
                                            return false;
                                        } else {
                                            if ($scope.vigenciaInicio === '') {
                                                return false;
                                            } else {
                                                if ($scope.inicioVigenciaTemp === '') {
                                                    return false;
                                                } else {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        $scope.radioGroupClick = function (item) {

        };

        $scope.openVigencia = function () {
            $scope.showCalendario = true;
        };
        $scope.openVigenciaInicio = function () {
            $scope.showCalendarioInicio = true;
        };

        $scope.siguiente = function () {
            if (isValid()) {
                $internal.encuesta.titulo = $scope.titulo;
                $internal.encuesta.descripcion = $scope.descripcion;
                $internal.encuesta.autor = $scope.autor;
                $internal.encuesta.direccion = $scope.direccion;
                $internal.encuesta.valides = $scope.vigencia;
                $internal.encuesta.vigenciaInicio = $scope.vigenciaInicio;                
                $internal.encuesta.tiempo = $scope.duracionPregunta.time;
                $internal.encuesta.tipoEncuesta = $scope.tipoEncuesta;

                $scope.vigencia.setHours($scope.timeTemp.getHours());
                $scope.vigencia.setMinutes($scope.timeTemp.getMinutes());

                $scope.vigenciaInicio.setHours($scope.inicioVigenciaTemp.getHours());
                $scope.vigenciaInicio.setMinutes($scope.inicioVigenciaTemp.getMinutes());
                
                
                if ($internal.encuesta.tipoEncuesta.id == 1) {
                    $window.location = '#/preguntas';
                } else {
                    $window.location = '#/categorias';
                }
            } else {
                $rootScope.alert = true;
                $rootScope.mensajeAlerta = "Debes llenar todos los campos.";
            }
        };

        $scope.showCalendario = false;
        $scope.showCalendarioInicio = false;
        
        
        $scope.vigenciaVacia = true;
        $scope.vigenciaVaciaInicio = true;

        $scope.minDate = moment();

        $scope.changeDate = function (e, data) {
            $scope.vigencia = data._d;
            var fecha = moment($scope.vigencia);
            $scope.month = fecha.format('M');
            $scope.day = fecha.format('D');
            $scope.vigenciaVacia = false;
        };

        $scope.changeDateInicio = function (e, data) {
            $scope.vigenciaInicio = data._d;
            var fecha = moment($scope.vigenciaInicio);
            $scope.monthInicio = fecha.format('M');
            $scope.dayInicio = fecha.format('D');
            $scope.vigenciaVaciaInicio = false;
        };

        $scope.aceptarCalendario = function () {
            $scope.showCalendario = false;
        };
        $scope.aceptarCalendarioInicio = function () {
            $scope.showCalendarioInicio = false;
        };
        
        $scope.cerrarCalendario = function () {
            $scope.showCalendario = false;
        };
        $scope.cerrarCalendarioInicio = function () {
            $scope.showCalendarioInicio = false;
        };
    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$internal', '$encuestas', '$direcciones', '$tipoEncuesta'];

    angular
        .module('crear')
        .controller('CrearEncuestaController', Controller);
})();