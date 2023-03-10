import { Course, ICourse } from '@src/models/course';
import { connect } from 'mongoose';

async function connectDb() {
  //localhost:8081/db/node_first_db/Course
  try {
    await connect('mongodb://user:pass@localhost:27017/node_first_db');
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
