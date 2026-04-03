import { Router } from "express";
import { getTeam } from "../controllers/externalTeamController";

const router = Router();

router.get("/team", getTeam);

export default router;