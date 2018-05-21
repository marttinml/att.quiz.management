/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $window, $encuestas) {

        $rootScope.spin = true;

        var socket = io.connect('https://serene-ridge-79304.herokuapp.com/');// Socket.io
        //var socket = io.connect('http://localhost:3000/');// SOcket.io
        socket.on('update-encuestas', function (data) {
            $scope.encuestas = data;
            $scope.$apply();
          });

        // MARK: - Crear nueva encuesta
        $scope.crear = function () {
            $window.location = '#/crear';
        };

        // MARK: Ver detalle
        $scope.detalle = function (value) {
            $window.location = '#/detalle/' + $scope.encuestas[value].id;
        };

        $scope.delete = function(id){
            $encuestas.delete({ id_encuesta:id },function(data){
                $window.location = '#';
            });
        };

        // MARK: - llena encuestas
        $scope.encuestas = $encuestas
            .query(function (data) {
                $rootScope.spin = false;
                console.log(data);
            }, function (e) {
                $rootScope.spin = false;
                console.log(e);
            });
    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$encuestas'];

    angular
        .module('inicio')
        .controller('InicioController', Controller);
})();