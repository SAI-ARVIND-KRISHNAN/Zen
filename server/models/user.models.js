import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: { type: String, required: true, unique: true },
    productivityScore: { type: Number, default: 0 },
    screenTime: {
      daily: { type: Number, default: 0 },
      weekly: { type: Number, default: 0 }
    },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

export default User;
