import { Router } from 'express';

import HealthCheckController from './healthCheck/HealthCheckController';
import HealthCHeckService from './healthCheck/HealthCheckService';

const router = Router();

// Services
const healthCheckService = new HealthCHeckService();

// Controllers
const healthCheckController = new HealthCheckController(healthCheckService);

// Routes
router.get('/health', (req, res) => healthCheckController.check(req, res));

export default router;
