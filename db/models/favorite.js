'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Sock }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Sock, { foreignKey: 'sock_id' });
    }
  }
  Favorite.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      sock_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Socks',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Favorite',
    }
  );
  return Favorite;
};
