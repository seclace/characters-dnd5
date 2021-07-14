import { Module } from '@nestjs/common';

import { RaceService } from './race.service';
import { RaceController } from './race.controller';
import { getRacesProvider, racesRepoProvider } from './race.providers';

@Module({
  providers: [RaceService, racesRepoProvider, getRacesProvider],
  controllers: [RaceController],
  exports: [racesRepoProvider, getRacesProvider],
})
export class RaceModule {}
