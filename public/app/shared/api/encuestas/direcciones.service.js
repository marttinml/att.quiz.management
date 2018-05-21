/* global angular */

(function () {
    angular
        .module('api.encuestas.direcciones', [])
        .service('$direcciones',
            function ($resource) {
                var url = 'https://arcane-garden-60088.herokuapp.com/v0/direccion';
                return $resource(url);
            });
})();