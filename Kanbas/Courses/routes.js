import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  // create
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  app.post("/api/courses", createCourse);
  // find
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };
  app.get("/api/courses", findAllCourses);
  // find one
  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.cid);
    res.json(course);
  };
  app.get("/api/courses/:cid", findCourseById);
  // delete
  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.cid);
    res.json(status);
  };
  app.delete("/api/courses/:cid", deleteCourse);
  // update
  const updateCourse = async (req, res) => {
    const { cid } = req.params;
    const status = await dao.updateCourse(cid, req.body);
    res.json(status);
  }
  app.put("/api/courses/:cid", updateCourse);
}