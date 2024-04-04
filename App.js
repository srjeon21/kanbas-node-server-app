import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from './Kanbas/Users/routes.js';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(
    cors({
      origin: ["http://localhost:3000", "https://a5--zesty-tarsier-816747.netlify.app"],
      credentials: true,
    })
  );
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);