const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Score extends Model {}

Score.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            reference: {
                model: 'gameparticipant',
                key: 'id'
            }
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        hand_id: {
            type: DataTypes.UUID,
            allowNull: false,
            reference: {
                model: 'hand',
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