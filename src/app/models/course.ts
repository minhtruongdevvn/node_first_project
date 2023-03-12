import { Document, Model, model, Query, Schema } from 'mongoose';
interface ICourse {
  name: string;
  description: string;
  image?: string;
  createAt?: Date;
  updateAt?: Date;
  slug?: string;
}

// we can add mongoose-delete package to support soft delete

const courseSchema = new Schema<ICourse>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true, maxlength: 600 },
    image: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    slug: { type: String, required: true, unique: true },
  },
  {
    query: {
      sortable(sorting: { name: string; type: 1 | -1 }) {
        if (!sorting) return this;
        return this.sort({ [sorting.name]: sorting.type });
      },
    },
  }
);

interface CourseQueryHelpers {
  sortable(sorting?: {
    name: string;
    type: 1 | -1;
  }): Query<any, Document<ICourse>> & CourseQueryHelpers;
}

const Course = model<ICourse, Model<ICourse, CourseQueryHelpers>>(
  'Course',
  courseSchema
);
export { courseSchema, ICourse, Course };
