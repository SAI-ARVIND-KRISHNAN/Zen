export const verifyCallBack = (accessToken, refreshToken, profile, done) => {
    //console.log(profile);
    done(null, profile);
}

export const checkLoggedIn = (req, res, next) => {
    const userId = req.isAuthenticated() && req.user;
    if (!userId) {
        return res.status(402).json({Error: "you must log in first!"})
    }
    console.log("Current user:", userId);
    next();
}
