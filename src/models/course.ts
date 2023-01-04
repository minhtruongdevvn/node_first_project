import { model, Schema } from 'mongoose';
interface ICourse {
  name: string;
  description: string;
  image?: string;
}

const courseSchema = new Schema<ICourse>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
});

const Course = model<ICourse>('Course', courseSchema);

export { courseSchema, ICourse, Course };
