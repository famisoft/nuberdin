/**
* Jardin.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id:{
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      required: true
    },
    nombre:{
      type: 'string',
      unique: true,
      required: true,
      size: 250
    },
    responsable:{
      type:'string',
      required: true,
      size: 150
    },
    telefono: {
      type: 'string',
      size: 20
    },
    direccion: {
      type: 'string',
      size: 200
    },
    ciudad: {
      type: 'string',
      size: 100
    },
    email: {
      type: 'email',
      unique: true,
      required: true,
      size: 100
    },
    licencia_funcionamiento: {
      type: 'string',
      size: 150
    },
    nit: {
      type: 'string',
      size: 150
    },
    acerca: {
      type: 'string',
      size: 250
    },
    pagina_web:{
      type: 'string',
      // Validacion de url valida.
      contains: function(cb) {
        setTimeout(function () {
          cb('http://');
        }, 1);
      }
    },
    //Relacion con la tabla planes
    id_plan: {
      model: 'planes'
    }
  }
};

