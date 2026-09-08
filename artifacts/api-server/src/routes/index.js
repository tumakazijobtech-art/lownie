import { Router } from "express";
import healthRouter from "./health.js";
import lownieRouter from "./lownie.js";
const router = Router();
router.use(healthRouter);
router.use(lownieRouter);
export default router;
