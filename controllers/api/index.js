const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const game = require('./Game');
const player = require('./Player');

router.use('/games',game);
router.use('/player',player);
// router.use('/users',userRoutes);

module.exports = router;
