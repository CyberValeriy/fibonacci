import { Router } from "express";
import { CommonController } from "../controllers";

const router = Router();

router.post("/input", CommonController.input);

router.get("/output/:ticket", CommonController.output);

export default router;
