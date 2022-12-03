const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Score extends Model {}

Score.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
        },
        user_id: {
            type: DataTypes.UUID,
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
        round_id: {
            type: DataTypes.UUID,
            allowNull: false,
            reference: {
                model: 'round',
                key: 'id'
            }
        },
        game_id: {
            type: DataTypes.UUID,
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