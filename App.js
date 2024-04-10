import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config"
import session from "express-session";
import UserRoutes from './Kanbas/Users/routes.js';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
//const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/kanbas';
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
    cors({
      //origin: ["http://localhost:3000", "https://a5--zesty-tarsier-816747.netlify.app"],
      credentials: true,
      origin: [process.env.FRONTEND_URL, process.env.FRONTEND_NETLIFY_URL]
    })
  );
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(
  session(sessionOptions)
);
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);