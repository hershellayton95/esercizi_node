import express from "express";
import "express-async-errors";
import cors from "cors";
import routerMain from "./routes/main"

import authRoutes from "./routes/auth";

const app = express();


app.use(express.json())

app.use(cors({
    origin: "http://localhost:8080"
}))

app.use("/", routerMain);

app.use("/auth", authRoutes);


export default app;
