/* global angular */

(function () {
    angular
        .module('api.encuestas.tipoEncuesta', [])
        .service('$tipoEncuesta',
            function ($resource) {
                var url = 'https://rocky-basin-62683.herokuapp.com/v0/tipo-encuesta';
                return $resource(url);
            });
})();