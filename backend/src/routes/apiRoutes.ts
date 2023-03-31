import { Router } from 'express';
import feedback from '../controllers/feedback.js';

const router = Router();

// /feedback
router.get('/feedback', async (req, res) => {
  res.json(await feedback('fiska', req.query.guess));
});

//  post (name, time, guesses, wordLength, duplicate)
router.post('/highscore', (req, res) => {
  console.log(req.body);
});

// /start (choose a new word to play with)
//  get noDuplicate and Length

export default router;
