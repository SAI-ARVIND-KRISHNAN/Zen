import express from 'express';
import { loginFailure } from '../controllers/failure.controllers.js';

const failureRoute = express.Router();

failureRoute.get('/', loginFailure);

export default failureRoute;