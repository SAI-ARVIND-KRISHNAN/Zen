import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

//we give credentials in the cores so that cookies persist on the frontend
app.use(cors({credentials: true, origin: "http://localhost:6969"}));

//loging requests
app.use(morgan('combined'));

export default app;