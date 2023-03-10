import CourseController from '@/app/controllers/CourseController';
import { Router } from 'express';

export default Router()
  .get('/', CourseController.index)
  .get('/create', CourseController.getCreateForm)
  .post('/create', CourseController.create)
  .get('/:id/delete', CourseController.delete)
  .get('/:id/edit', CourseController.getEditForm)
  .put('/:id/edit', CourseController.edit)
  .get('/:slug', CourseController.getBySlug);
