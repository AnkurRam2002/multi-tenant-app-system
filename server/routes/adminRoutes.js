import express from 'express';
import { getAllDeployments } from '../controllers/adminController.js';

const router = express.Router();

router.get('/deployments', getAllDeployments);

export default router;
