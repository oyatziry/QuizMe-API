const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
  front: {
    type: String,
    required: true
  },
  back: {
    type: String,
    required: true
  },
  deck: {
    type: Schema.Types.ObjectId,
    ref: 'Deck', 
    required: true
  }
});

const Flashcard = mongoose.model('Flashcard', FlashcardSchema);

module.exports = Flashcard;