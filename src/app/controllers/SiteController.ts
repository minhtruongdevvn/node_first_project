import { Request, Response } from 'express';

class SiteController {
  index(req: Request, res: Response) {
    res.render('home');
  }

  search(req: Request, res: Response) {
    res.render('search');
  }
}

export default new SiteController();
