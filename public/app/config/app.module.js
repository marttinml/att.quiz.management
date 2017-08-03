/* global angular*/
(function () {
    angular.module('app', [
        'ngRoute',
        'ngResource',
        'dir.spin',
        'dir.alert',
        'dir.header',
        'dir.bar',
        'dir.datepicker',
        'mSelect',
        'mPlaceholder',
        'mRadioGroup',
        'datePicker',
        'api.indicadores',
        'api.encuestas',
        'api.encuestas.direcciones',
        'api.encuestas.tipo',
        'api.encuestas.satisfaccion',
        'api.encuestas.tipoEncuesta',
        'internal',
        'crear',
        'inicio',
        'categorias',
        'preguntas',
        'generar',
        'detalle',
        'resumen',
        'calendario',
        'detalleEncuesta'
    ]);
})();