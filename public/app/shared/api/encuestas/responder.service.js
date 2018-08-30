/* global angular */

(function () {
    angular
        .module('api.encuestas.responder', [])
        .service('$respuesta',
            function ($resource) {
                var url = 'https://encuestasattservices.herokuapp.com/v0/responder-encuesta';
                return $resource(url);
            });
})();