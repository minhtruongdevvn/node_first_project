import { model, Schema } from 'mongoose';
interface ICourse {
  name: string;
  description: string;
  image?: string;
  createAt?: Date;
  updateAt?: Date;
  slug?: string;
}

const courseSchema = new Schema<ICourse>({
  name: { type: String, required: true },
  description: { type: String, required: true, maxlength: 600 },
  image: String,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  slug: { type: String, required: true, unique: true },
});

const Course = model<ICourse>('Course', courseSchema);
export { courseSchema, ICourse, Course };
