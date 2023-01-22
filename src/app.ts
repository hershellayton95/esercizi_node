import express from "express";
import "express-async-errors";
import cors from "cors";
import routerMain from "./routes/main";
import routerAuth from "./routes/auth";

import session from "express-session"
import config from "./config";
import passport from "passport";


const app = express();
app.use(session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());



app.use(express.json())

app.use(cors({
    origin: "http://localhost:8080",
    credentials: true
}))

app.use("/", routerMain)
app.use("/auth", routerAuth)


export default app;
