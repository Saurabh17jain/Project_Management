import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import projectrouter from "./routes/projectroutes";
import taskRouter from "./routes/tasksroutes";
import searchRouter from "./routes/searchroutes";
import userRouter from "./routes/userroutes";

dotenv.config();

const app = express();

app.use(express.json()); // ✅ replaces body-parser
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("This is home route");
});

app.use("/projects", projectrouter);
app.use("/tasks", taskRouter);
app.use("/search", searchRouter);
app.use("/users", userRouter);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`); // ✅ fixed
});
