const router = require('express').Router();
const { Game, User, Round } = require('../../models');
router.get('/:id', (req, res) => {
    console.log(req.params);
    User.findByPk(req.params.id)
    .then(playerData => {
        if(!playerData){
            res.status(404).json({message: "No player has been found."});
        }
        res.json(playerData);

    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;
