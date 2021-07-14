import { Module } from '@nestjs/common';
import {
  characterIdGeneratorProvider,
  characterRepoProvider, createCharacterProvider, getAllCharactersProvider,
  getCharacterProvider,
  setCharacterBackstoryProvider,
  setCharacterClassProvider,
  setCharacterRaceProvider
} from '@app/character/character.providers';
import { RaceModule } from '@app/race/race.module';
import { ClassModule } from '@app/class/class.module';
import { BackstoryModule } from '@app/backstory/backstory.module';

import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';

@Module({
  imports: [RaceModule, ClassModule, BackstoryModule],
  controllers: [CharacterController],
  providers: [
    CharacterService,
    characterRepoProvider,
    getCharacterProvider,
    setCharacterRaceProvider,
    setCharacterClassProvider,
    setCharacterBackstoryProvider,
    characterIdGeneratorProvider,
    createCharacterProvider,
    getAllCharactersProvider,
  ],
  exports: [
    characterRepoProvider,
    getCharacterProvider,
    setCharacterRaceProvider,
    setCharacterClassProvider,
    setCharacterBackstoryProvider,
    createCharacterProvider,
    getAllCharactersProvider,
  ],
})
export class CharacterModule {}
