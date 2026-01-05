import { Request, Response } from "express";
import Match from "../models/Match";

// GET /api/matches/upcoming
export const getUpcomingMatches = async (_: Request, res: Response) => {
  try {
    const matches = await Match.find({ date: { $gte: new Date() } }).sort({ date: 1 });
    res.json(matches);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

// POST /api/matches
export const createMatch = async (req: Request, res: Response) => {
  try {
    const match = await Match.create(req.body);
    res.status(201).json(match);
  } catch {
    res.status(400).json({ message: "Invalid match data" });
  }
};

// PUT /api/matches/:id
export const updateMatch = async (req: Request, res: Response) => {
  try {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(match);
  } catch {
    res.status(400).json({ message: "Update failed" });
  }
};

// DELETE /api/matches/:id
export const deleteMatch = async (req: Request, res: Response) => {
  try {
    await Match.findByIdAndDelete(req.params.id);
    res.json({ message: "Match deleted" });
  } catch {
    res.status(400).json({ message: "Delete failed" });
  }
};
