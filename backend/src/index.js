import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Football Match Center backend is running!" });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
