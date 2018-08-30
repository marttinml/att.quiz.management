/* global angular */

(function () {
    angular
        .module('api.indicadores', [])
        .service('$indicadores',
            function ($resource) {
                var url = 'https://encuestasattservices.herokuapp.com/v0/indicadores/:id_encuesta';
                //url = 'http://localhost:2000/v0/indicadores/:id_encuesta';
                return $resource(url, {
                    id_encuesta: '@id_encuesta'
                });
            });

    angular
        .module('api.indicadores')
        .service('$calificacion',
            function ($resource) {
                var url = 'https://encuestasattservices.herokuapp.com/v0/calificacion/:id_encuesta';
                //url = 'http://localhost:2000/v0/indicadores/:id_encuesta';
                return $resource(url, {
                    id_encuesta: '@id_encuesta'
                });
            });

    angular
        .module('api.indicadores')
            .service('$excel',
                function ($resource) {
                    var url = 'https://encuestasattservices.herokuapp.com/v0/calificaciones_excel/:id_encuesta';
                    //url = 'http://localhost:2000/v0/indicadores/:id_encuesta';
                    return $resource(url, {
                        id_encuesta: '@id_encuesta'
                    });
                });
})();