const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  deck: [{
    type: Schema.Types.ObjectId,
    ref: 'Deck'
  }]
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;