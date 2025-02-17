import express from 'express';
import { tasks } from '../controllers/tasks.controllers.js';

const tasksRoute = express.Router();

tasksRoute.get('/', tasks);

export default tasksRoute;