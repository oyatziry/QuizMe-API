require("dotenv").config()
const db = require('./models');
const data = require('./seedData.json');

// can loop through array of decks or insertmany 
for(let j=0; j<data.decks.length; j++){
  db.Deck.deleteMany({}, (err, deletedDeck) => {
    db.Deck.create({name: data.decks[j].name}, (err, savedDeck) => {
      if (err) console.log("Error creating Deck: ", err);
      // console.log(decks.length, " decks created successfully!");
      console.log(savedDeck, "deck created!");

      db.Flashcard.deleteMany({}, (err, deletedFlashcards) => {
        db.Flashcard.insertMany(data.decks[j].flashcards, (err, savedFlashcard) => {
          if (err) console.log("Error in creating flashcards", err);

          console.log(savedFlashcard, " saved flashcards");

          // loop through flashcard ids
          for(let i=0; i<savedFlashcard.length; i++){
            savedDeck.flashcards.push(savedFlashcard[i]._id);
          }

          // can save outside of the loop
          savedDeck.save((err, updatedDeck) => {
            if (err) console.log("error in saving deck", err);

            console.log(updatedDeck, "updated deck");
          
          }); // tells mongoose to run save on mongo
        });
      });
    });
  });
};