import mongoose from 'mongoose';

const userScheme = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
});

const User = mongoose.model("User", userScheme);

export default User;