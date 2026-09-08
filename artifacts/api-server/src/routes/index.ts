import { Router, type IRouter } from "express";
import healthRouter from "./health";
import lownieRouter from "./lownie";

const router: IRouter = Router();

router.use(healthRouter);
router.use(lownieRouter);

export default router;
