import { Router } from "express";
import {
  getUpcomingMatches,
  createMatch,
  updateMatch,
  deleteMatch,
} from "../controllers/matchController";

const router = Router();

router.get("/upcoming", getUpcomingMatches);
router.post("/", createMatch);
router.put("/:id", updateMatch);
router.delete("/:id", deleteMatch);

export default router;
