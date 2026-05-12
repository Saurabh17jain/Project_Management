import { Router } from "express";
import { createProjects, getProjects } from "../controller/Projectcontroler";

const router = Router();

router.get("/", getProjects);
router.post("/", createProjects);
export default router;
