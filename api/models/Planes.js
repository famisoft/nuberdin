/**
* Planes.js
*
* @description :: Representa el modelo de la tabla Planes que almacena los diferentes planes que los usuarios pueden elegir
 * al utilizar la aplicacion
* @docs        :: http://nuberdi/#documentacion/planes
*/

module.exports = {

  attributes: {
    id:{
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      required: true
    },
    plan:{
      type: 'string',
      unique: true,
      required: true,
      size: '150'
    },
    cantidad_usuarios: {
      type: 'integer',
      required: true
    },
    //Referencia a la tabla jardines
    jardines:{
      collection: 'jardines',
      via: 'id_plan'
    }

  }
};

