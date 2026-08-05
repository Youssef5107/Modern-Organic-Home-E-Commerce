import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import shopRoutes from "./routes/shopRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./test/testRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";
import addressesRoutes from "./routes/addressesRoutes.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/shop", shopRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/stripe", stripeRoutes);
app.use("/api/addresses", addressesRoutes);
app.use("/api/test", testRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
