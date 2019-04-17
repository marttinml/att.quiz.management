/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $routeParams, $encuestas, $indicadores, $interval) {

        
        // var socket = io.connect('https://ancient-journey-62555.herokuapp.com/');// Socket.io
        //var socket = io.connect('http://localhost:3000/');// SOcket.io
        // socket.on('update-indicadores', function (data) {
        //     console.log(data);
        //     $scope.veces = data.respondida;
        //     $scope.graficas = getColors(data.graficas);
        //     $scope.preguntas = settingColor(data.preguntas);
        //     $scope.$apply();
        //   });


          var settingColor = function(list){
              var color = '';
            for(var i in list){
                var pregunta = list[i]; 
             for (var j in pregunta.respuestas) {
                    color = '#009EDA';
                    // if (j == "0") {
                    //     color = '#3BAED9';
                    // }else if (j == "1") {
                    //     color = '#38BC9C';
                    // } else if (j == "2") {
                    //     color = '#8CC051';
                    // } else if (j == "3") {
                    //     color = '#F6BB43';
                    // } else if (j == "4") {
                    //     color = '#DB4453';
                    // } else {
                    //     color = '#13ac8f';
                    // }
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
                color: '#009EDA',
                porcentaje: 43
            },
            {
                color: '#009EDA',
                porcentaje: 27,
                before: 0
            },
            {
                color: '#009EDA',
                porcentaje: 16,
                before: 0
            },
            {
                color: '#009EDA',
                porcentaje: 10,
                before: 0
            },
            {
                color: '#009EDA',
                porcentaje: 4,
                before: 0
            }
        ];

        function getColors(graficas) {
            var array = [];
            var color = '';

            for (var i = 0; i < graficas.length; i++) {
                color = '#009EDA';
                // if (i == 0) {
                //     color = '#3BAED9';
                // }else if (i == 1) {
                //     color = '#38BC9C';
                // } else if (i == 2) {
                //     color = '#8CC051';
                // } else if (i == 3) {
                //     color = '#F6BB43';
                // } else if (i == 4) {
                //     color = '#DB4453';
                // } else {
                //     color = '#13ac8f';
                // }
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
        
        
        

        // $interval(function () {
        //     $indicadores.get({
        //         id_encuesta: $routeParams.id_encuesta
        //     }, function (data) {
        //         $rootScope.spin = false;
        //         $scope.veces = data.respondida;
        //         $scope.graficas = getColors(data.graficas);
        //         console.log(data);
        //     }, function (e) {
        //         $rootScope.spin = false;
        //         console.log(e);
        //     });
        // }, 10000);


    };

    Controller.$inject = ['$scope', '$rootScope', '$routeParams', '$encuestas', '$indicadores', '$interval'];

    angular
        .module('detalleEncuesta')
        .controller('DetalleEncuestaEController', Controller);
})();