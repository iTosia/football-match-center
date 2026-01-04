import { Request, Response } from "express";
import Match from "../models/Match";

export const getUpcomingMatches = async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const matches = await Match.find({ date: { $gte: now } }).sort({ date: 1 });
    res.json(matches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
