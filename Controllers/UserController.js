const db = require('../models');

const create = (req,res) => {
  db.User.create(req.body, (err, savedUser) => {
    if (err) console.log('Error in creating user:', err);

    res.status(201).json({ user: savedUser })
  })
}

const find = (req, res) => {
  db.User.findOne({ username: req.body }, (err, foundUser) => {
    if (err) console.log('Error in finding user: ', err);

    res.status(200).json({ user: foundUser });
  })
}

module.exports = {
  create,
  find,
}