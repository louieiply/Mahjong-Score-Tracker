const Game = require('./Game');
const User = require('./User');
const Score = require('./Score');
const Round = require('./Round');

//Game in Other Tables
Game.hasMany(Round, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Round.belongsTo(Game, {
    foreignKey: 'game_id'
});

Game.hasMany(Score, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Score.belongsTo(Game, {
    foreignKey: 'game_id',
});

//Round in Other Tables
Round.hasMany(Score, {
    foreignKey: 'round_id',
    onDelete: 'CASCADE'
});

Score.belongsTo(Round, {
    foreignKey: 'round_id'
});



// User in Other Tables
User.hasMany(Score, {
    foreignKey: 'user_id',
});

Score.belongsTo(User, {
    foreignKey: 'winner_id',
});

User.hasMany(Game,{
    foreignKey: 'winner_id',
});

Game.belongsTo(Score, {
    foreignKey: 'winner_id',
});

User.hasMany(Round, {
    foreignKey: 'winner_id',
});

Round.belongsTo(Score, {
    foreignKey: 'winner_id',
});

module.exports = { Game, Round, User, Score };