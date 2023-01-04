import { Course } from '@src/models/course';
import { NextFunction, Request, Response } from 'express';

class SiteController {
  index(req: Request, res: Response, next: NextFunction) {
    Course.find({})
      .then(coursesDoc => {
        const courses = coursesDoc.map(courseDoc => courseDoc.toObject());
        res.render('home', { courses });
      })
      .catch(next);
  }

  search(req: Request, res: Response) {
    res.render('search');
  }
}

export default new SiteController();
