import mongoose from 'mongoose';

const Highscore = mongoose.model('Highscore', {
  name: String,
  time: Number,
  guesses: Number,
  wordLength: Number,
  noDuplicate: Boolean,
});

export { Highscore };
