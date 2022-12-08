import { SearchQuery } from '@src/models/search';
import { Request, Response } from 'express';

class NewController {
  index(req: Request, res: Response) {
    res.render('news');
  }

  searchByQuery(req: Request, res: Response) {
    const query = req.query as unknown as SearchQuery;
    console.log(query.wkf);
    res.render('news');
  }

  searchByBody(req: Request, res: Response) {
    const body = req.body as unknown as SearchQuery;
    console.log(body);
    res.render('news');
  }
}

export default new NewController();
