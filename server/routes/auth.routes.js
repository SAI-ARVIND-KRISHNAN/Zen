import express from 'express';
import passport from 'passport';

import { logout } from '../controllers/auth.controllers.js';

const authRouter = express.Router();

authRouter.get('/google',
    passport.authenticate('google', {
        scope: ['email', 'profile'],
    })
);

authRouter.get('/google/callback', 
    passport.authenticate('google', {
        failureRedirect: '/failure',
        successRedirect: '/'
    }), 
    (req, res) => {
        console.log("Google called us back!")
    }
);

authRouter.get('/logout', logout);

export default authRouter;