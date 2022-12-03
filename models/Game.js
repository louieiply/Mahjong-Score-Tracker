const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {};

Game.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        winner_id: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'game',
    }
  );

module.exports = Game;
