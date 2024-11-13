'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'userId' })
  

      // define association here
    }
  }
  Card.init({
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    price: DataTypes.INTEGER,
    condition: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};