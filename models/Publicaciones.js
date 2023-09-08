const { DataTypes, sequelize } = require('../models/database');

const PublicacionSchema = sequelize.define('Publicaciones', {
    // Model attributes are defined here
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    detalle: {
      type: DataTypes.STRING,
      allowNull: false // No admitimos valores nulos
    }
  }, {
    // Other model options go here
    
  });


  module.exports = PublicacionSchema;
