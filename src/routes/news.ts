import NewController from '@src/app/controllers/NewController';
import { Router } from 'express';

export default Router()
  .get('/', NewController.index)
  .post('/search', NewController.searchByBody)
  .get('/search', NewController.searchByQuery);
