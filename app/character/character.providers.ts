import { Provider } from '@nestjs/common';
import { InMemoryCharacterRepository } from '@character/persistence/character/in-memory-character-repository';
import { GetCharacterUseCase } from '@character/usecase/character/get-character.use-case';
import { CharacterExtractor } from '@character/usecase/character/character-extractor';
import { SetCharacterRaceUseCase } from '@character/usecase/race/set-character-race.use-case';
import { RacesRepoSymbol } from '@app/race/race.providers';
import { RaceExtractor } from '@race/usecase/race/race-extractor';
import { CharacterPersistor } from '@character/usecase/character/character-persistor';
import { ClassesRepoSymbol } from '@app/class/class.providers';
import { SetCharacterClassUseCase } from '@character/usecase/class/set-character-class.use-case';
import { ClassExtractor } from '@class/usecase/class/class/class-extractor';
import { SetCharacterBackstoryUseCase } from '@character/usecase/backstory/set-character-backstory.use-case';
import { BackstoryExtractor } from '@backstory/usecase/backstory/backstory-extractor';
import { BackstoryRepoSymbol } from '@app/backstory/backstory.providers';

export const CharacterRepoSymbol = Symbol('CharacterRepo');
export const characterRepoProvider: Provider = {
  provide: CharacterRepoSymbol,
  useClass: InMemoryCharacterRepository,
};

export const GetCharacterSymbol = Symbol('GetCharacter');
export const getCharacterProvider: Provider = {
  provide: GetCharacterSymbol,
  useFactory: (characterExtractor: CharacterExtractor) => {
    return new GetCharacterUseCase(characterExtractor);
  },
  inject: [CharacterRepoSymbol],
};

export const SetCharacterRaceSymbol = Symbol('SetCharacterRace');
export const setCharacterRaceProvider: Provider = {
  provide: SetCharacterRaceSymbol,
  useFactory: (
    raceExtractor: RaceExtractor,
    characterExtractor: CharacterExtractor,
    characterPersistor: CharacterPersistor,
  ) => {
    return new SetCharacterRaceUseCase(
      raceExtractor,
      characterExtractor,
      characterPersistor,
    );
  },
  inject: [RacesRepoSymbol, CharacterRepoSymbol, CharacterRepoSymbol],
};

export const SetCharacterClassSymbol = Symbol('SetCharacterClass');
export const setCharacterClassProvider: Provider = {
  provide: SetCharacterClassSymbol,
  useFactory: (
    classExtractor: ClassExtractor,
    characterExtractor: CharacterExtractor,
    characterPersistor: CharacterPersistor,
  ) => {
    return new SetCharacterClassUseCase(
      classExtractor,
      characterExtractor,
      characterPersistor,
    );
  },
  inject: [ClassesRepoSymbol, CharacterRepoSymbol, CharacterRepoSymbol],
};

export const SetCharacterBackstorySymbol = Symbol('SetCharacterBackstory');
export const setCharacterBackstoryProvider: Provider = {
  provide: SetCharacterBackstorySymbol,
  useFactory: (
    backstoryExtractor: BackstoryExtractor,
    characterExtractor: CharacterExtractor,
    characterPersistor: CharacterPersistor,
  ) => {
    return new SetCharacterBackstoryUseCase(
      backstoryExtractor,
      characterExtractor,
      characterPersistor,
    );
  },
  inject: [BackstoryRepoSymbol, CharacterRepoSymbol, CharacterRepoSymbol],
};
