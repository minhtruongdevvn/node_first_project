import { Course } from '@/app/models/course';
import mongoUtils from '@/utils/mongo.utils';
import { NextFunction, Request, Response } from 'express';

class SiteController {
  index(req: Request, res: Response, next: NextFunction) {
    Course.find({})
      .then(coursesDoc => {
        res.render('home', {
          courses: mongoUtils.documentsToObject(coursesDoc),
        });
      })
      .catch(next);
  }

  search(req: Request, res: Response) {
    res.render('search');
  }
}

export default new SiteController();
