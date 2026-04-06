import { Request, Response } from "express";
import { getApiStatus } from "../services/footballApi";

export const getStatus = async (req: Request, res: Response) => {
  try {
    const status = await getApiStatus();
    res.json(status);
  } catch (error: any) {
    res.status(500).json({ message: "Failed to fetch API status", error: error.message });
  }
};
