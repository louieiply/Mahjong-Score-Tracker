const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const game = require('./Game');

router.use('/games',game);
// router.use('/users',userRoutes);

module.exports = router;
