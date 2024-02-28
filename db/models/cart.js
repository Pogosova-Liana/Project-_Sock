'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ User, Order_line }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Order_line, { foreignKey: 'cart_id' });
    }
  }
  Cart.init(
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
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
