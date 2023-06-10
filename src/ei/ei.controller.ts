import { Controller, Get } from '@nestjs/common';
import { EiService } from './ei.service';

@Controller('ei')
export class EiController {
  constructor(private readonly eiService: EiService) {}

  @Get('deploymentTargets')
  getDeploymentTargets() {
    return this.eiService.findAllDeploymentTargets();
  }
}
