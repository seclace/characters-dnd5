import { Controller, Get } from '@nestjs/common';
import { BackstoryService } from '@app/backstory/backstory.service';

@Controller('backstory')
export class BackstoryController {
  constructor(private readonly backstoryService: BackstoryService) {}

  @Get()
  async getAll() {
    return this.backstoryService.getBackstories();
  }
}
