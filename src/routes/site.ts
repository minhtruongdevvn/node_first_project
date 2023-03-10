import SiteController from '@/app/controllers/SiteController';
import { Router } from 'express';

export default Router().get('/', SiteController.index).get('/search', SiteController.search);
