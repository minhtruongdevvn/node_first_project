import { Course, ICourse } from '@src/models/course';
import { connect } from 'mongoose';

async function connectDb() {
  try {
    await connect('mongodb://127.0.0.1:27017/first_node');
    console.log('db connected');
  } catch (error) {
    console.log('failed to connect db', error);
  }
}

async function insertCourse(course: ICourse) {
  try {
    const courseModel = new Course(course);
    await courseModel.save();
  } catch (error) {
    console.log('failed to add course');
  }
}

async function getCourses() {
  return Course.find({});
}

export { connectDb, insertCourse };
