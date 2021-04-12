const router = require('express').Router();
const ctrl = require('../Controllers');

router.post('/signup', ctrl.users.create);
router.post('/login', ctrl.users.find);
router.get('/', ctrl.decks.all);
router.get('/:id', ctrl.decks.show);

module.exports = router;