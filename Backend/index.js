// src/index.js
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import sequelize from "./lib/db.js";          // <-- החיבור החדש
import authRouter from "./routes/auth.router.js";
import msgRouter  from "./routes/message.router.js";
import { protectRoute } from "./middleware/auth.middleware.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.use("/api/auth", authRouter);
app.use("/api/messages", protectRoute, msgRouter);

const PORT = process.env.PORT || 5000;
async function start() {
    try {
        await sequelize.authenticate();
        console.log("✅ Database connected!");
        // במקום מיגריישנים אוטומטיים:
        await sequelize.sync({ alter: true });
        console.log("✅ Models synced!");

        app.listen(PORT, () => {
            console.log(`🚀 Server listening on port ${PORT}`);
        });
    } catch (err) {
        console.error("❌ Failed to start:", err);
    }
}

start();
