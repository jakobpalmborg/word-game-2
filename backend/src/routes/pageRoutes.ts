import { Router } from 'express';

const router = Router();

router.get('/highscore', (req, res) => {
  res.render('highscore');
});

export default router;
