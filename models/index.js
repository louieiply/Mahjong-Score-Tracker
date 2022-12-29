const Game = require('./Game');
const User = require('./User');
const Score = require('./Score');
const Round = require('./Round');
const GameParticipant = require('./GameParticipant');
const Session = require('./Session');
const SessionParticipant = require('./SessionParticipant');

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

User.hasMany(GameParticipant, {
    foreignKey: 'participant_id'
});

GameParticipant.belongsTo(User, {
    foreignKey: 'participant_id'
});

User.hasMany(SessionParticipant, {
    foreignKey: 'participant_id'
});

SessionParticipant.belongsTo(User, {
    foreignKey: 'participant_id'
});

// Session in Other Tables
Session.hasMany(SessionParticipant, {
    foreignKey:'session_id'
});

SessionParticipant.belongsTo(Session, {
    foreignKey:'session_id'
});

module.exports = { Game, Round, User, Score, GameParticipant, Session, SessionParticipant};