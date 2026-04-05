import express from "express";
import cors from "cors";
import LinkRouter from "./routes/route.link.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/link",LinkRouter)

app.get("/", (req, res) => {
  res.json({ success: true, message: "API is Working" });
});

export default app;