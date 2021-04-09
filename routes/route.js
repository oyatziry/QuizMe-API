const router = require('express').Router();
const ctrl = require('../Controllers');

router.post('/signup', ctrl.users.create);
router.get('/', ctrl.decks.all);

module.exports = router;