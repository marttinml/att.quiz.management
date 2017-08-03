/* global angular */

(function () {
    
    angular
        .module('Singleton', [])
        .factory('$singleton', function () {
            return {
                mensaje: 'Listo'
            };
        });
    
})();