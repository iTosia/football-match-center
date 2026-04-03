import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./config/db";
import matchRoutes from "./routes/matchRoutes";
import externalTeamRoutes from "./routes/externalTeamRoutes";

connectDB();

const app = express();
app.use(express.json());

app.use("/api/matches", matchRoutes);
app.use("/api/external", externalTeamRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
