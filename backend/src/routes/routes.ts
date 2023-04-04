import { Router } from 'express';
import feedback from '../controllers/feedback.js';
import mongoose from 'mongoose';
import { Highscore } from '../models.js';
import getRandomWord from '../controllers/getRandomWord.js';
import commonEnglishWords from '../controllers/commonEnglishWords.js';
import * as uuid from 'uuid';

mongoose.connect(process.env.MONGODB_URL);

const router = Router();

const GAMES = [];

// START GAME
router.post('/api/games', async (req, res) => {
  const game = {
    correctWord: getRandomWord(
      commonEnglishWords.commonWords,
      parseInt(req.body.numberOfLetters),
      req.body.noDuplicate
    ),
    guesses: [],
    startTime: new Date(),
    id: uuid.v4(),
  };

  GAMES.push(game);

  res.status(201).json({ id: game.id });
});

// POST GUESS
router.post('/api/games/:id/guesses', async (req, res) => {
  const game = GAMES.find((savedGame) => savedGame.id == req.params.id);
  if (game) {
    const guess = req.body.guess;
    game.guesses.push(guess);
  }
  let result = await feedback(game.correctWord, req.body.guess);
  res.status(201).json(result);
});

// Highscore GET (name, time, guesses, wordLength, duplicate)
async function getHighscore() {
  let response = await Highscore.find();
  let data = JSON.parse(JSON.stringify(response));
  return data;
}

router.get('/highscore', async (req, res) => {
  const highscores = await getHighscore();
  res.render('highscore', { highscores });
});

//  Highscore POST
router.post('/api/highscore', async (req, res) => {
  const highscore = new Highscore(req.body);
  await highscore.save();

  res.status(201).json({ data: req.body });
});

export default router;
