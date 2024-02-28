'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_line extends Model {
    static associate({ Cart, Sock }) {
      this.belongsTo(Cart, { foreignKey: 'cart_id' });
      this.belongsTo(Sock, { foreignKey: 'sock_id' });
    }
  }
  Order_line.init(
    {
      cart_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Carts',
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
      modelName: 'Order_line',
    }
  );
  return Order_line;
};
