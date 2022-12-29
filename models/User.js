const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init (
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len:[8],
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        winRate: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
        },
        gamesWon: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        gameLost: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        totalGame: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }


    },
    {
        // hooks: {
        //     beforeCreate: async (newUserData) => {
        //         newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //         return newUserData;
        //     },
        //     beforeUpdate: async (updatedUserData) => {
        //         updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //         return updatedUserData;
        //     },

        // },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;