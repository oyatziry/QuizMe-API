const db = require('../models');

const all = (req, res) => {
  db.Deck.find({}, (err, foundDecks) => {
    if (err) console.log('Error in finding all ');

    if(!foundDecks) return res.json({ message: "No decks found in database" });

    res.status(200).json({ decks: foundDecks });
  })
}

const show = (req, res) => {
  db.Deck.findById(req.params.id)
    .populate('flashcards')
    .exec((err, foundDeck) => {
      if (err) console.log('Error in finding deck with this id', err);

      res.status(200).json({ deck: foundDeck });
    })
}

module.exports = {
  all,
  show,
}