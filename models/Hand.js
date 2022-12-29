const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hand extends Model{};
    //一局
Hand.init(
    {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'hand',
    }
);

module.exports = Hand;