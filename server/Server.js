import http from 'http';
import dotenv from "dotenv";

import app from './App.js';

dotenv.config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}...`);
});
