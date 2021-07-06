import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { classesRepoProvider, getClassesProvider } from '@app/class/class.providers';
import { getRacesProvider, racesRepoProvider } from '@app/race/race.providers';
import { backstoryRepoProvider, getBackstoriesProvider } from '@app/backstory/backstory.providers';
import {
  characterRepoProvider,
  getCharacterProvider,
  setCharacterBackstoryProvider,
  setCharacterClassProvider,
  setCharacterRaceProvider,
} from '@app/character/character.providers';
import { AppService } from '@app/app.service';

@Module({
  controllers: [AppController],
  providers: [
    classesRepoProvider,
    getClassesProvider,
    racesRepoProvider,
    getRacesProvider,
    backstoryRepoProvider,
    getBackstoriesProvider,
    characterRepoProvider,
    getCharacterProvider,
    setCharacterRaceProvider,
    setCharacterClassProvider,
    setCharacterBackstoryProvider,
    AppService,
  ]
})
export class AppModule {}
