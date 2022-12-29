const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SessionParticipant extends Model{};

SessionParticipant.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            unique: true,
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
        session_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model:'session',
                key:'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'sessionparticipant',
    }
);

module.exports = SessionParticipant;