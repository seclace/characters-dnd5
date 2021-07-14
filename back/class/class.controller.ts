import { Controller, Get } from '@nestjs/common';
import { ClassService } from '@app/class/class.service';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  async getClasses() {
    return this.classService.getClasses();
  }
}
