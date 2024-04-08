import model from "./model.js";
export const createCourse = (course) => {
    delete course._id;
    course.id = Date.now();
    return model.create(course);
};
export const findAllCourses = () => model.find();
export const findCourseById = (cid) => model.findOne({ id: cid });
export const deleteCourse = (cid) => model.deleteOne({ id: cid });
export const updateCourse = (cid, course) =>  model.updateOne({ id: cid }, { $set: course });