import express from 'express';
// import { engine } from 'express-handlebars';

const app = express();
// app.engine('handlebars', engine());
// app.set('views', './templates');
// app.set('partials', '/templates/partials');

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
