/* global angular */

(function () {
    var service = function () {
        return {
            preguntas: [
                {
                    pregunta: '',
                    respuestas: []
                }
            ],
            preguntaActual: 0,
            getAll: function(){
                return this.preguntas;
            },
            addPregunta: function(obj){
                if (this.preguntaActual == (this.getAll().length - 1)){
                    this.preguntas.push(obj);
                } else {
                    this.preguntas.splice(this.preguntaActual + 1, 0, obj);
                }
            },
            removePregunta: function(){
                if(this.preguntas.length > 1){
                    this.preguntas.splice(this.preguntaActual, 1);
                }
            },
            getBackDisabled: function(){
                if (this.preguntaActual <= 0) {
                    return true;
                } else {
                    return false;
                }
            },
            getNextDisabled: function(){
                if (this.preguntaActual >= (this.getAll().length - 1)){
                    return true;
                } else {
                    return false;
                }
            },
            getEliminarDisabled: function(){
                if(this.preguntas.length > 1){
                    return false;
                } else {
                    return true;
                }
            },
            canUploadPreguntas: function(array){
                var flag = true;
                for(var i = 0; i < array.length; i++){
                    if (array[i].pregunta === ''){
                        flag = false;
                    }
                }
                return flag;
            }
        };
    };
    angular
        .module('preguntas')
        .service('$preguntas', service);
})();