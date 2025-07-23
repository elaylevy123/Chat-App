import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import authRoutes from "./src/Routes/auth.js";
import messageRoutes from "./src/Routes/message.js";
import { app, server } from "./src/lib/socket.js";
import sequelize from "./src/lib/db.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

sequelize.sync().then(() => {
    server.listen(PORT, () => {
        console.log("server is running on PORT:" + PORT);
    });
}).catch((err) => {
    console.error("Unable to connect to the database:", err);
});
