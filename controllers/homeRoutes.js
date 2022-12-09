const router = require('express').Router();
const { Game, User } = require('../models');

var games = "";

router.get('/', async (req, res) => {
  try {
    try{
      const gameWithUserData = await Game.findAll({
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ],
      });
      games = gameWithUserData.map((game) => game.get({ plain: true }));
      res.render('homepage',{
        games
      });
    }
    catch(err) {
      const gameData = await Game.findAll();
      games = gameData.map((game) => game.get({ plain: true }));

      res.render('homepage',{
        games
    });
    };

    // Serialize data so the template can read it
      
    console.log(games);
    // Pass serialized data and session flag into template

  }
  catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;