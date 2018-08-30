/* global angular */

(function () {
    angular
        .module('api.encuestas', [])
        .service('$encuestas',
            function ($resource) {
                var url = 'https://encuestasattservices.herokuapp.com/v0/encuesta/:id_encuesta';
                return $resource(url, {
                    id_encuesta: '@id_encuesta'
                });
            });
})();