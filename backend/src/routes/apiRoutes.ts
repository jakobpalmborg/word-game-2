import { Router } from 'express';
import feedback from '../controllers/feedback.js';

const router = Router();

// /feedback
router.get('/feedback', async (req, res) => {
  res.json(await feedback('fiska', req.query.guess));
});

// /highscore
//  post (name, time, guesses, wordLength, duplicate)

// /start (choose a new word to play with)
//  get noDuplicate and Length

export default router;
