const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Score extends Model {}

Score.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'user',
                key: 'id'
            }
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'game',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,    
        modelName: 'score',
    }
)

module.exports = Score;