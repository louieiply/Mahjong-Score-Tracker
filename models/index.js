const Game = require('./Game');
const User = require('./User');
const Score = require('./Score');
const Round = require('./Round');
const GameParticipant = require('./GameParticipant');
const Hand = require('./Hand');
const Match = require('./Match');

//Game in Other Tables
Game.hasMany(Match, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Match.belongsTo(Game, {
    foreignKey: 'game_id'
});

Game.hasMany(Round, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Round.belongsTo(Game, {
    foreignKey: 'game_id'
});

//Here
Game.hasMany(Hand, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Hand.belongsTo(Game, {
    foreignKey: 'game_id'
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

GameParticipant.hasMany(Score, {
    foreignKey: 'user_id',
});

Score.belongsTo(GameParticipant, {
    foreignKey: 'user_id',
});

// GameParticipant.hasMany(Round, {
//     foreignKey: 'winner_id',
// });

// Round.belongsTo(GameParticipant, {
//     foreignKey: 'winner_id',
// });

//here
GameParticipant.hasMany(Hand, {
    foreignKey: 'winner_id'
});

Hand.belongsTo(Hand, {
    foreignKey: 'winner_id'
});



//Round in Other Tables
// Round.hasMany(Score, {
//     foreignKey: 'round_id',
//     onDelete: 'CASCADE'
// });

// Score.belongsTo(Round, {
//     foreignKey: 'round_id'
// });

//Hand in Other Tables
Hand.hasMany(Score, {
    foreignKey: 'hand_id'
});

Score.belongsTo(Hand, {
    foreignKey: 'hand_id'
});


// User in Other Tables
// User.hasMany(Score, {
//     foreignKey: 'user_id',
// });

// Score.belongsTo(User, {
//     foreignKey: 'user_id',
// });

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


// Match is other tables
Match.hasMany(Round, {
    foreignKey: 'match_id',
});

Round.belongsTo(Match, {
    foreignKey: 'match_id'
});

Match.hasMany(Hand, {
    foreignKey: 'match_id',
});

Hand.belongsTo(Match, {
    foreignKey: 'match_id'
});

module.exports = { Game, Round, User, Score, GameParticipant, Hand, Match };