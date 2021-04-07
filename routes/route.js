const router = require('express').Router();
const ctrl = require('../Controllers');

router.post('/signup', ctrl.users.create);

module.exports = router;