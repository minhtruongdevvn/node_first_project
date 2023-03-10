import { ICourse } from '@/app/models/course';
import { Document, Types } from 'mongoose';

export default {
  documentsToObject: (
    documents: (Document<unknown, any, ICourse> &
      ICourse & {
        _id: Types.ObjectId;
      })[]
  ) => {
    return documents.map(doc => doc.toObject());
  },
  documentToObject: (
    document: Document<unknown, any, ICourse> &
      ICourse & {
        _id: Types.ObjectId;
      }
  ) => document.toObject(),
};
