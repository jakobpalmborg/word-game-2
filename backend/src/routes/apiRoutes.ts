import { Router } from 'express';
import feedback from '../controllers/feedback.js';
import mongoose from 'mongoose';
import { Highscore } from '../models.js';

mongoose.connect(process.env.MONGODB_URL);

const router = Router();

// /feedback
router.get('/feedback', async (req, res) => {
  res.json(await feedback('fiska', req.query.guess));
});

//  post (name, time, guesses, wordLength, duplicate)
router.post('/highscore', async (req, res) => {
  const highscore = new Highscore(req.body);
  await highscore.save();

  res.status(201).json({ data: req.body });
});

// /start (choose a new word to play with)
//  get noDuplicate and Length

export default router;
