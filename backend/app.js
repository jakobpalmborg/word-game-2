import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//   res.send('index');
// });

// app.get('/about', (req, res) => {
//   res.send('about');
// });

// app.get('/highscore', (req, res) => {
//   res.send('highscore');
// });

app.use(express.static('../dist'));

app.listen(5080);
