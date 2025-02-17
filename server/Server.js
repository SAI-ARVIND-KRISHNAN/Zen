import https from 'https';
import fs from 'fs';
import dotenv from "dotenv";
import mongoose from 'mongoose';

import app from './App.js';
import connectMongoDB from './db/connectMongoDB.js';

dotenv.config();

const PORT = process.env.PORT || 8000;

const server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
}, app);

mongoose.connection.once('open',() => {
    console.log("Mongoose connection ready!");
})

mongoose.connection.on('error', (error) => {
    console.error(error);
});

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}...`);
    connectMongoDB();
});
