import { Course, ICourse } from '@/app/models/course';
import mongoUtils from '@/utils/mongo.utils';
import stringUtils from '@/utils/string.utils';
import { NextFunction, Request, Response } from 'express';

class CourseController {
  index(req: Request, res: Response, next: NextFunction) {
    Course.find({})
      .then(coursesDoc => {
        res.render('home', {
          courses: mongoUtils.documentsToObject(coursesDoc),
        });
      })
      .catch(next);
  }

  getBySlug(req: Request, res: Response, next: NextFunction) {
    Course.findOne({ slug: req.params.slug })
      .then(e => {
        if (!e) {
          res.send('Course not found');
          return;
        }
        res.render('course/show', {
          course: mongoUtils.documentToObject(e),
          id: e.id,
        });
      })
      .catch(next);
  }

  getCreateForm(req: Request, res: Response, next: NextFunction) {
    res.render('course/create');
  }

  create(req: Request, res: Response, next: NextFunction) {
    const createCourse = req.body as unknown as ICourse;
    Course.create({
      ...createCourse,
      slug: stringUtils.toSnakeCase(createCourse.name),
    })
      .then(e => {
        res.render('course/show', { course: mongoUtils.documentToObject(e) });
      })
      .catch(next);
  }

  getEditForm(req: Request, res: Response, next: NextFunction) {
    Course.findById(req.params.id).then(e => {
      if (!e) {
        res.send('Course not found');
        return;
      }
      res.render('course/edit', {
        course: mongoUtils.documentToObject(e),
        id: req.params.id,
      });
    });
  }

  edit(req: Request, res: Response, next: NextFunction) {
    const editCourse = req.body as unknown as ICourse;
    Course.findByIdAndUpdate(req.params.id, { $set: { ...editCourse } })
      .then(e => {
        if (!e) {
          res.send('Course not found');
          return;
        }

        Course.findById(req.params.id)
          .then(e => {
            res.render('course/show', {
              course: mongoUtils.documentToObject(e!),
            });
          })
          .catch(next);
      })
      .catch(next);
  }

  delete(req: Request, res: Response, next: NextFunction) {
    console.log('asdasd');
    Course.findByIdAndDelete(req.params.id)
      .then(() => {
        Course.find({})
          .then(coursesDoc => {
            res.render('home', {
              courses: mongoUtils.documentsToObject(coursesDoc),
            });
          })
          .catch(next);
      })
      .catch(next);
  }
}

export default new CourseController();
