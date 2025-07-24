// src/index.js
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import sequelize from "./src/lib/db.js";          // <-- החיבור החדש
import authRouter from "./src/Routes/auth.js";
import msgRouter  from "./src/Routes/message.js";
import { protectRoute } from "./src/Middleware/authmiddleware.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.use("/Route/auth", authRouter);
app.use("/Route/message", protectRoute, msgRouter);

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
