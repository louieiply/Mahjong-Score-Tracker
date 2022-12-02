const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Round extends Model {}

Round.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'game',
                key: 'id',
            },
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true,
            default: '',
        },
        winner_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,    
        modelName: 'round'
    }
);

module.exports = Round;
