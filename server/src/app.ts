import sessionConfig from "./config/session.config";
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import userRoute from "./auth/user.route";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(cookieParser());
app.use(
    cors({
        origin: ['http://localhost:5173'],
        credentials: true,
    })
);
app.use("/auth", userRoute);
app.listen(process.env.SERVER_PORT, () =>
    console.log(`listening on http://localhost:${process.env.SERVER_PORT}`)
);
