import express from 'express';
import { engine } from 'express-handlebars';
import pageRoutes  from './routes/pageRoutes.js'
import apiRoutes  from './routes/apiRoutes.js'

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/templates/');
app.set('partials', './templates/partials');
app.use('/', pageRoutes)
app.use('/api', apiRoutes)
app.use(express.static('../frontend/dist'));
app.use(express.static('./public'));



app.get('*', (req, res) => {
    res.send('404 page not found');
  });

export default app;