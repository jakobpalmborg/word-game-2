import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/templates/');
app.set('partials', '/templates/partials');

// app.get('/', (req, res) => {
//   res.send('index page');
// });

// app.get('/about', (req, res) => {
//   res.send('about page');
// });

app.get('/highscore', (req, res) => {
  res.render('highscore');
});

// app.get('*', (req, res) => {
//   res.send('404 page not found');
// });

app.use(express.static('../frontend/dist'));
app.use(express.static('./dist'));

// /game
// /word

// app.get('game')

// post highscore

app.listen(5080);
