import { Router } from 'express';
import feedback from '../controllers/feedback.js';
import mongoose from 'mongoose';
import { Highscore } from '../models.js';
import getRandomWord from '../controllers/getRandomWord.js';
import commonEnglishWords from '../controllers/commonEnglishWords.js';
import * as uuid from 'uuid';

mongoose.connect(`${process.env.MONGODB_URL}`);

const router = Router();

type Game = {
  correctWord: string;
  guesses: string[];
  wordLength: number;
  noDuplicate: boolean;
  id: string;
  startTime: Date;
  endTime?: Date;
};

const GAMES: Game[] = [];

// START GAME
router.post('/api/games', async (req, res) => {
  const game: Game = {
    correctWord: getRandomWord(
      commonEnglishWords.commonWords,
      req.body.numberOfLetters,
      req.body.noDuplicate
    ),
    guesses: [],
    wordLength: req.body.numberOfLetters,
    noDuplicate: req.body.noDuplicate,
    id: uuid.v4(),
    startTime: new Date(),
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
  if (game !== undefined) {
    let result = await feedback(game.correctWord, req.body.guess);
    if (req.body.guess === game.correctWord) {
      game.endTime = new Date();
      res.status(201).json(result);
    } else {
      res.status(201).json(result);
    }
  }
});

// Highscore GET (name, time, guesses, wordLength, duplicate)
async function getHighscore() {
  let response = await Highscore.find().sort({ time: 1 });
  let data = JSON.parse(JSON.stringify(response));
  return data;
}

router.get('/highscore', async (req, res) => {
  const highscores = await getHighscore();
  res.render('highscore', { highscores });
});

//  Highscore POST
router.post('/api/highscore/:id/highscore', async (req, res) => {
  const game = GAMES.find((savedGame) => savedGame.id == req.params.id);

  if (game !== undefined) {
    let highscoreObj: {
      name: string;
      time: number;
      guesses: number;
      wordLength: number;
      noDuplicate: boolean;
    } = {
      name: req.body.name,
      time: (game.endTime!.getTime() - game.startTime.getTime()) / 1000,
      guesses: game.guesses.length,
      wordLength: game.wordLength,
      noDuplicate: game.noDuplicate,
    };

    const highscore = new Highscore(highscoreObj);
    await highscore.save();
  }

  res.status(201).json({ data: req.body });
});

export default router;
