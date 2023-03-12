import { connectDb } from '@/config/db';
import dotenv from 'dotenv';
import express, { Express, Request } from 'express';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';
import path from 'path';
import mapRoutes from './routes';

dotenv.config();

connectDb();
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
app.use(methodOverride('_method'));
app.use((req: Request, res, next) => {
  if (req.query.sort) {
    const [name, type]: [string, string] = (req.query.sort as string).split(
      ';'
    ) as [string, string];
    if (['asc', 'desc'].includes(type)) {
      req._sort = {
        name,
        type: type == 'asc' ? 1 : -1,
      };
    }
  }
  next();
});

/* Template engine */
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: {
      getSortType: (sortType?: number) =>
        sortType ? (sortType == 1 ? 'desc' : 'asc') : 'asc',
    },
  })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

/* Mapping route */
mapRoutes(app);

/* Overrride port */
app.listen(port, () => {
  // listen to this port
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
