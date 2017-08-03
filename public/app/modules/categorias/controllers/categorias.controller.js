/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $window, $internal) {

        // LOAD $internal categorias
        $scope.categorias = $internal.categorias;

        $scope.cerrar = function () {
            $window.location = '#/crear';
            $internal.categorias = [
                {
                    id: 1,
                    categoria: '',
                    respuesta: ''
                }
            ];
        };

        $scope.eliminarDisabled = function () {
            if ($scope.categorias.length > 1) {
                return false;
            } else {
                return true;
            }
        };


        // MARK: - Función que valida que los campos de categoría no estén vacíos.
        function isValid() {
            var flag = true;
            for (var i = 0; i < $scope.categorias.length; i++) {
                if ($scope.categorias[i].categoria === '') {
                    flag = false;
                }

                if ($scope.categorias[i].categoria === undefined) {
                    flag = false;
                }
            }
            return flag;
        }

        // MARK: - Función para agregar más categorías.
        $scope.agregarCategorias = function () {
            if ($scope.categorias.length < 10) {
                if (isValid()) {
                    $scope.categorias.push({
                        id: $internal.categorias.length + 1,
                        categoria: '',
                        respuesta: ''
                    });
                } else {
                    $rootScope.alert = true;
                    $rootScope.mensajeAlerta = "La categoría no puede estar vacía.";
                }
            } else {
                $rootScope.alert = true;
                $rootScope.mensajeAlerta = "No puedes agregar más de 10 categorías.";
            }
        };

        $scope.removerCategoria = function () {
            if ($scope.categorias.length > 1) {
                $scope.categorias.pop();
            }
        };

        // MARK: - Función para redireccionar a crear preguntas
        $scope.agregarPreguntas = function () {
            $internal.categorias = $scope.categorias;
            if (isValid()) {
                console.log($internal.categorias);
                $window.location = '#/preguntas-cat';
            } else {
                $rootScope.alert = true;
                $rootScope.mensajeAlerta = "La categoría no puede estar vacía.";
            }

        };

    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$internal'];

    angular
        .module('categorias')
        .controller('CategoriasController', Controller);
})();