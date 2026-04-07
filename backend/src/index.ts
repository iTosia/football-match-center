import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import { connectDB } from "./config/db";
import matchRoutes from "./routes/matchRoutes";
import externalTeamRoutes from "./routes/externalTeamRoutes";
import statusRoutes from "./routes/statusRoutes";

// TODO: connect the real db when we need to store user data or cache API responses. For now, we can keep it simple and focus on the core functionality of fetching and displaying football match data.
// connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/matches", matchRoutes);
app.use("/api/external", externalTeamRoutes);
app.use("/api/status", statusRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
