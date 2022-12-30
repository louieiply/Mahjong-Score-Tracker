const sequelize = require('../config/connection');
const {User, Game, GameParticipant} = require('../models');

const userData = require('./userData.json');
const gameData = require('./gameData.json');

const userArray = new Array();
const gameArray = new Array();
const gameparticipantsArray = new Array();
const tempArray = new Array();

const seedDatabase = async () => {
    try{
        await sequelize.sync({ force: true});

    // Create new Users Records
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    //Capture User UUID into array
    for (let {id} of users) {
        userArray.push(id);
    }
    
    //Create new Game Records
    const games = await Game.bulkCreate(gameData, {
        individualHooks: true,
        returning: true,    
    });

    console.log(games);

    //Capture Game UUID into Array
    for (let {id} of games) {
        gameArray.push(id);
        userArray.forEach(user => {
            const data = {
                "game_id": id,
                "participant_id": user,    
            };
            tempArray.push(data);
        });
    }

    //Create new GameParticipant Records
    const gameparticipants = await GameParticipant.bulkCreate(tempArray,{
        individualHooks: true,
        returning: true
    });
    console.log(gameparticipants);

    }
    catch(err){
        console.log(err);
    }
};

seedDatabase();