import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from '@app/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('backstories')
  async backstories() {
    return this.appService.getBackstories();
  }

  @Get('classes')
  async classes() {
    return this.appService.getClasses();
  }

  @Get('races')
  async races() {
    return this.appService.getRaces();
  }
}
