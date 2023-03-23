import IHealthCheckService from './interfaces/IHealthCheckService';

class HealthCHeckService implements IHealthCheckService {
  check() {
    return { status: 'healthy' };
  }
}

export default HealthCHeckService;
