import { Router } from "express";
import {
  createTasks,
  getTasks,
  updateTasksStatus,
} from "../controller/Taskscrontroller";

const router = Router();

router.get("/", getTasks);
router.post("/", createTasks);
router.patch("/:taskId/status", updateTasksStatus);

export default router;
