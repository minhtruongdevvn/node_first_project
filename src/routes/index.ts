import { Express } from 'express';
import newsRouter from './news';
import siteRouter from './site';

const mapRoutes = (app: Express) => {
  // 127.0.0.1 -> localhost
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
};

export default mapRoutes;
