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
        game_id: {
            type: DataTypes.UUID,
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
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'gameparticipant',
                key: 'id',
            },
        },
        round_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model: 'round',
                key: 'id',
            }
        },
        match_id:{
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model: 'match',
                key: 'id',
            }
        }


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