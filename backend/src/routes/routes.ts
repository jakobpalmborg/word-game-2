import { Router } from 'express';
import feedback from '../controllers/feedback.js';
import mongoose from 'mongoose';
import { Highscore } from '../models.js';

mongoose.connect(process.env.MONGODB_URL);

const router = Router();

// /feedback
router.get('/api/feedback', async (req, res) => {
  res.json(await feedback('fiska', req.query.guess));
});

// Highscore GET (name, time, guesses, wordLength, duplicate)
async function getHighscore() {
  let response = await Highscore.find();
  console.log(response);
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

// /start (choose a new word to play with)
//  get noDuplicate and Length

export default router;
