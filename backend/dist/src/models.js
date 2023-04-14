import mongoose from 'mongoose';
const highscoreSchema = new mongoose.Schema({
    name: String,
    time: Number,
    guesses: Number,
    wordLength: Number,
    noDuplicate: Boolean,
});
const Highscore = mongoose.model('Highscore', highscoreSchema);
export { Highscore };
