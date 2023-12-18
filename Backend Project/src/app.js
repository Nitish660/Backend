import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // Corrected import statement

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));
app.use(express.static("public"));

app.use(cookieParser());

// Routes
import useRouter from "../src/routes/user.routes.js";

// Routes declaration
app.use("/api/v1/users", useRouter);

export { app };
