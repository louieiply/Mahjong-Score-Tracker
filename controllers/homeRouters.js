const router = require('express').Router();
const { Game, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll({
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ],
    });

    // Serialize data so the template can read it
    const games = gameData.map((game) => game.get({ plain: true }));
    console.log(games);
    // Pass serialized data and session flag into template
    res.render('homepage',{
        games,
        
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;