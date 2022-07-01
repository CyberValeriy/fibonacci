import { Router } from "express";
import CommonRouter from "./common.router";
const ApiRouter = Router();

ApiRouter.use(CommonRouter);

export default ApiRouter;
