import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import dotenv from "dotenv";
import { Strategy } from 'passport-google-oauth20';
import cookieSession from 'cookie-session';

import {verifyCallBack, checkLoggedIn} from "./middleware/auth.middleware.js";

import authRouter from './routes/auth.routes.js';
import failureRoute from './routes/failure.routes.js';
import tasksRoute from './routes/tasks.routes.js';

dotenv.config();

const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2
}

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallBack));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    done(null, id);
});

const app = express();

app.use(helmet());
app.use(cors({credentials: true, origin: "http://localhost:6969"}));
app.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2]
}));
app.use(passport.initialize());
app.use(passport.session())

app.use(morgan('combined'));

app.use('/auth', authRouter);
app.use('/failure', failureRoute);

app.use('/tasks', checkLoggedIn, tasksRoute);

export default app;