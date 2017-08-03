/* global angular */

(function () {
    var service = function ($satisfaccion) {
        return {
            categorias: [
                {
                    id: 1,
                    categoria: '',
                    respuesta: ''
                }
            ],
            encuesta: {
                titulo: 'Titulo',
                descripcion: '',
                autor: '',
                direccion: '',
                valides: '',
                tiempo: '',
                tipoEncuesta: ''
            },
            preguntas: [
                {
                    pregunta: '',
                    respuestas: []
                }
            ],
            respuestasSatisfaccion: $satisfaccion
                .query(
                    function (data) {
                        console.log('Satisfaccion');
                        console.log(data);
                    },
                    function (e) {
                        console.log(e);
                    })
        };
    };
    angular
        .module('internal', [])
        .service('$internal', service);
})();