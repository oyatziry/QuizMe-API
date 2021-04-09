const db = require('../models');

const all = (req, res) => {
  db.Deck.find({}, (err, foundDecks) => {
    if (err) console.log('Error in finding all ')
  })
}

const create = (req, res) => {
  db.Deck.create(req.body, (err, savedDeck) => {
    if (err) console.log('Error in creating Deck: ', err);

    res.status(201).json({ deck: savedDeck })
  });
}

module.exports = {
  create,
}