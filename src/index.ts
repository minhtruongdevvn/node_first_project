import dotenv from 'dotenv';
import express, { Express } from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import mapRoutes from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

/* Middlewares */
// request logger
// app.use(morgan('combined'));
// handle static files
app.use(express.static(path.join(`${__dirname}/../`, 'public')));
// handle body data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Template engine */
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
  })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

/* Mapping route */
mapRoutes(app);

/* Overrride port */
app.listen(port, () => {
  // listen to this port
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
