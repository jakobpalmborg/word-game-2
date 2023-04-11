import mongoose from 'mongoose';

interface IHighscore {
  name: String;
  time: Number;
  guesses: Number;
  wordLength: Number;
  noDuplicate: Boolean;
}

const highscoreSchema = new mongoose.Schema<IHighscore>({
  name: String,
  time: Number,
  guesses: Number,
  wordLength: Number,
  noDuplicate: Boolean,
});

const Highscore = mongoose.model<IHighscore>('Highscore', highscoreSchema);

export { Highscore };
