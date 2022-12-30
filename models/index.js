const Game = require('./Game');
const User = require('./User');
const Score = require('./Score');
const Round = require('./Round');
const GameParticipant = require('./GameParticipant');

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

Game.hasMany(GameParticipant, {
    foreignKey: 'game_id',
});

GameParticipant.belongsTo(Game, {
    foreignKey: 'game_id'
});

//GameParticipant in Other Tables
GameParticipant.hasOne(Game, {
    foreignKey: 'winner_id'
});

Game.belongsTo(GameParticipant, {
    foreignKey: 'winner_id'
});

GameParticipant.hasMany(Round, {
    foreignKey: 'winner_id',
});

Round.belongsTo(GameParticipant, {
    foreignKey: 'winner_id',
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

// User.hasMany(Game,{
//     foreignKey: 'winner_id',
// });

// Game.belongsTo(Score, {
//     foreignKey: 'winner_id',
// });

// User.hasMany(Round, {
//     foreignKey: 'winner_id',
// });

// Round.belongsTo(Score, {
//     foreignKey: 'winner_id',
// });

User.hasMany(GameParticipant, {
    foreignKey: 'participant_id'
});

GameParticipant.belongsTo(User, {
    foreignKey: 'participant_id'
});


module.exports = { Game, Round, User, Score, GameParticipant };