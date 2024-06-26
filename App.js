import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';

const app = express();
app.use(
    cors({
      origin: ["http://localhost:3000", "https://a5--zesty-tarsier-816747.netlify.app"],
      credentials: true,
    })
  );
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);