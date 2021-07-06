import { Controller, Get } from '@nestjs/common';
import { RaceService } from '@app/race/race.service';

@Controller('race')
export class RaceController {
  constructor(private readonly raceService: RaceService) {}

  @Get()
  async getRaces() {
    return this.raceService.getRaces();
  }
}
