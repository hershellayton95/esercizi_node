import express from "express";
import "express-async-errors";
import cors from "cors";
import routerMain from "./routes/main"

import session from "express-session"
import config from "./config";


const app = express();
app.use(session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(express.json())

app.use(cors({
    origin: "http://localhost:8080"
}))

app.use("/", routerMain)


export default app;
