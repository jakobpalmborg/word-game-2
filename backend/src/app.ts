import express from 'express';
import { engine } from 'express-handlebars';

import routes from './routes/routes.js';

const app = express();
app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/templates/');
app.set('partials', './templates/partials');
app.use('/', routes);
app.use(express.static('../frontend/dist'));
app.use(express.static('./dist/public'));
app.get('*', (req, res) => {
  res.send('404 page not found');
});

export default app;
