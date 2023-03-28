import { Router } from 'express';

const router = Router();
// app.get('/', (req, res) => {
//   res.send('index page');
// });

// app.get('/about', (req, res) => {
//   res.send('about page');
// });
router.get('/highscore', (req, res) => {
    res.render('highscore');
  });

export default router;