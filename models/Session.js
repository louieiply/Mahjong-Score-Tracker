const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Session extends Model {};

Session.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Mahjong-"+Date.now().toString(),

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

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'session',
    }
    
);

module.exports = Session;