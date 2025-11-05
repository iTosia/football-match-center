import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Football Match Center backend (TypeScript) is running!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
