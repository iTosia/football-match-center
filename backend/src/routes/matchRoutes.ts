import { Router } from "express";
import { getUpcomingMatches } from "../controllers/matchController";

const router = Router();

router.get("/upcoming", getUpcomingMatches);

export default router;
