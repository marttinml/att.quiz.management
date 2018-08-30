/* global angular */

(function () {
    angular
        .module('api.encuestas.tipoEncuesta', [])
        .service('$tipoEncuesta',
            function ($resource) {
                var url = 'https://encuestasattservices.herokuapp.com/v0/tipo-encuesta';
                return $resource(url);
            });
})();