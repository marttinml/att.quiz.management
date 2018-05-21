/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $routeParams, $encuestas, $indicadores, $interval, $window, $calificacion, $excel) {

        
        var socket = io.connect('https://serene-ridge-79304.herokuapp.com/');// Socket.io
        // var socket = io.connect('http://localhost:3000/');// SOcket.io
        socket.on('update-indicadores', function (data) {
            console.log(data);
            $scope.veces = data.respondida;
            $scope.graficas = getColors(data.graficas);
            $scope.preguntas = settingColor(data.preguntas);
            $scope.$apply();
          });

          $scope.id_encuesta = $routeParams.id_encuesta;


          var settingColor = function(list){
              var color = '';
            for(var i in list){
                var pregunta = list[i]; 
             for (var j in pregunta.respuestas) {
                    if (j == "0") {
                        color = '#3BAED9';
                    }else if (j == "1") {
                        color = '#38BC9C';
                    } else if (j == "2") {
                        color = '#8CC051';
                    } else if (j == "3") {
                        color = '#F6BB43';
                    } else if (j == "4") {
                        color = '#DB4453';
                    } else {
                        color = '#13ac8f';
                    }
                pregunta.respuestas[j].color = color;
                }   
            }
            return list;
          };

        $rootScope.spin = true;

        $scope.muestraId = false;

        $scope.toggleId = function () {
            $scope.muestraId = !$scope.muestraId;
        };

        $scope.graficas = [
            {
                color: '#3BAED9',
                porcentaje: 43
            },
            {
                color: '#38BC9C',
                porcentaje: 27,
                before: 0
            },
            {
                color: '#8CC051',
                porcentaje: 16,
                before: 0
            },
            {
                color: '#F6BB43',
                porcentaje: 10,
                before: 0
            },
            {
                color: '#DB4453',
                porcentaje: 4,
                before: 0
            }
        ];

        function getColors(graficas) {
            var array = [];
            var color = '';

            for (var i = 0; i < graficas.length; i++) {
                if (i == 0) {
                    color = '#3BAED9';
                }else if (i == 1) {
                    color = '#38BC9C';
                } else if (i == 2) {
                    color = '#8CC051';
                } else if (i == 3) {
                    color = '#F6BB43';
                } else if (i == 4) {
                    color = '#DB4453';
                } else {
                    color = '#13ac8f';
                }
                array.push({
                    color: color,
                    name: graficas[i].name,
                    porcentaje: graficas[i].porcentaje
                });
            }
            return array;
        }

        $scope.encuesta = $indicadores.get({
            id_encuesta: $routeParams.id_encuesta
        }, function (data) {
            $rootScope.spin = false;
            $scope.veces = data.respondida;
            $scope.graficas = getColors(data.graficas);
            $scope.preguntas = settingColor(data.preguntas);
            console.log(data);
        }, function (e) {
            $rootScope.spin = false;
            console.log(e);
        });

        $scope.detalleEncuesta = function(){
            $window.location = '#/detalle-encuesta/' + $routeParams.id_encuesta;
        };

        $scope.getResults = function(){
            $rootScope.spin = false;
            $scope.encuesta = $calificacion.get({
                id_encuesta: $routeParams.id_encuesta
            }, function (data) {
                $rootScope.spin = false;
                console.log(data);
            }, function (e) {
                $rootScope.spin = false;
                console.log(e);
            });
        };

        $scope.getExcel = function(){
            $excel.get({id_encuesta:$routeParams.id_encuesta},function (e) {
                $rootScope.spin = false;
                console.log(e);
            });
        };


    };

    Controller.$inject = ['$scope', '$rootScope', '$routeParams', '$encuestas', '$indicadores', '$interval', '$window', '$calificacion', '$excel'];

    angular
        .module('detalle')
        .controller('DetalleEncuestaController', Controller);
})();