import { Router } from "express";
import { search } from "../controller/Searchcontroller";

const router = Router();

router.get("/", search);

export default router;
