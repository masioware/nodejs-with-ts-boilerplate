import { Request, Response } from 'express';

interface IHealthCheckController {
  check(req: Request, res: Response);
}

export default IHealthCheckController;
