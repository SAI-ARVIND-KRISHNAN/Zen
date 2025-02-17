import User from "../models/user.models.js";

export const verifyCallBack = async (accessToken, refreshToken, profile, done) => {
    //console.log(profile);
    const userId = profile.id;
    try {
        const existingUser = await User.findOne({googleId: userId});

        if (!existingUser) {
            const newUser = new User({
                googleId: userId
            });

            if (newUser) {
                await newUser.save();
                res.status(201).send({message: "New user created"});
            } else {
                res.status(400).send({Error: "Opps! something went wrong in pushing googleId"})
            }
        }
        
        done(null, profile);
    } catch (error) {
        console.log("Error in verifyCallBack Middleware", error.message);
        res.status(500).json({Error: "Internal server error"});
    }
    
}

export const checkLoggedIn = (req, res, next) => {
    const userId = req.isAuthenticated() && req.user;
    if (!userId) {
        return res.status(402).json({Error: "you must log in first!"})
    }
    console.log("Current user:", userId);
    next();
}
