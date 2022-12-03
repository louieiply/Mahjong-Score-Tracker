const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GameParticipant extends Model{};

GameParticipant.init(
    {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
        },
        participant_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model: 'user',
                key: 'id',
            }
            
        },
        game_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model:'game',
                key: 'id',
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'gameparticipant',
    }
);

module.exports = GameParticipant;