import https from 'https';
import fs from 'fs';
import dotenv from "dotenv";

import app from './App.js';

dotenv.config();

const PORT = process.env.PORT || 8000;

const server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
}, app);

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}...`);
});
