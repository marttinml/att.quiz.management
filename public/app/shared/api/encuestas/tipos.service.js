/* global angular */

(function () {
    angular
        .module('api.encuestas.tipo', [])
        .service('$tiposEncuesta',
            function ($resource) {
                var url = 'https://arcane-garden-60088.herokuapp.com/v0/tipo-encuesta';
                return $resource(url);
            });
})();