const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Match extends Model {};

// 一雀爲基本單位, 一雀裏有四圈

Match.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },
        game_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'game',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'Match',
    }

);

module.exports = Match;