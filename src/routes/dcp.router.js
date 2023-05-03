import { Router } from "express";
import * as DCPController from "../controllers/dcp.controller.js";

const router = Router();

router.get("/unique/:steps", DCPController.getUniqueWays);

router.get("/unique/:steps/:max", DCPController.getUniqueWays);

export default router;