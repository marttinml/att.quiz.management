/* global angular */

(function () {
    angular
        .module('api.encuestas.satisfaccion', [])
        .service('$satisfaccion',
            function ($resource) {
                var url = 'https://arcane-garden-60088.herokuapp.com/v0/satisfaccion';
                return $resource(url);
            });
})();