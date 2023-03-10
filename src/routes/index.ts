import { Express } from 'express';
import courseRouter from './course';
import newsRouter from './news';
import siteRouter from './site';

const mapRoutes = (app: Express) => {
  // 127.0.0.1 -> localhost
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
  app.use('/courses', courseRouter);
};

export default mapRoutes;
