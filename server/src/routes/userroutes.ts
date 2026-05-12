import { Router } from "express";

import { getUsers } from "../controller/Usercontroler";

const router = Router();

router.get("/", getUsers);
// router.post("/", postUser);
// router.get("/:cognitoId", getUser);

export default router;
