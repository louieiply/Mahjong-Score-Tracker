const router = require('express').Router();
const { Game, User, Round } = require('../../models');

router.get('/', (req, res) => {
    Game.findAll({
        include: [{model:User},{model:Round}]
    })
        .then(dbgameData => {
            if(!dbgameData){
                res.status(404).json({message: 'No Games found'});
            }
                res.json(dbgameData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

module.exports = router;