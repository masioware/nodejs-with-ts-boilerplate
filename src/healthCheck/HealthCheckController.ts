import { Request, Response } from 'express';

import IHealthCheckController from './interfaces/IHealthCheckController';
import IHealthCheckService from './interfaces/IHealthCheckService';

class HealthCheckController implements IHealthCheckController {
  constructor(private healthCheckService: IHealthCheckService) {}

  check(req: Request, res: Response) {
    const response = this.healthCheckService.check();
    res.json(response);
  }
}

export default HealthCheckController;
