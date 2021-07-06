import { Module } from '@nestjs/common';

import { BackstoryModule } from './backstory/backstory.module';
import { RaceModule } from './race/race.module';
import { ClassModule } from './class/class.module';
import { CharacterModule } from './character/character.module';

@Module({
  controllers: [],
  providers: [],
  imports: [BackstoryModule, RaceModule, ClassModule, CharacterModule],
})
export class AppModule {}
