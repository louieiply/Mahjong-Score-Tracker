const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Round extends Model {}

Round.init(
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
        match_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'match',
                key: 'id',
            },
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true,
            default: '',
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
