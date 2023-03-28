import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/templates/');
app.set('partials', './templates/partials');

const port = 5080;

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
app.use(express.static('./public'));


// /startff
//    get()

// /feedback

// /highscore

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
