const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  flashcards: [{
    type: Schema.Types.ObjectId,
    ref: 'Flashcard'
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Deck = mongoose.model('Deck', DeckSchema);

module.exports = Deck;