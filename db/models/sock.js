'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate({ Favorite, Order_line }) {
      this.hasMany(Favorite, { foreignKey: 'sock_id' });
      this.hasMany(Order_line, { foreignKey: 'sock_id' });
    }
  }
  Sock.init(
    {
      imgSock: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      color: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      design: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      photo: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Sock',
    }
  );
  return Sock;
};
