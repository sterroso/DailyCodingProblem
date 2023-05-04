import { Router } from "express";
import * as DCPController from "../controllers/dcp.controller.js";

const router = Router();

router.get("/sample/:steps", DCPController.getUniqueWays);

router.get("/problem1/:k", DCPController.dcp1);

export default router;
