const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  flashcards: [{
    type: Schema.Types.ObjectId,
    ref: 'Flashcard',
    required: true
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Deck = mongoose.model('Deck', DeckSchema);

module.exports = Deck;