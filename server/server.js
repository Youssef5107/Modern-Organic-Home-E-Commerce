import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import shopRoutes from "./routes/shopRoutes.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4004;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/shop", shopRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
