import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import matchRoutes from "./routes/matchRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/matches", matchRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
