import { RaceId } from '@race/domain/race/race';

import { SetCharacterRace } from './set-character-race';
import { CharacterId } from '../../domain/character/character';
import { CharacterRaceExtractor } from './character-race-extractor';
import { CharacterPersistor } from '../character/character-persistor';
import { CharacterExtractor } from '../character/character-extractor';
import { CharacterNotFoundError } from '../character/error/character-not-found.error';

export class SetCharacterRaceUseCase implements SetCharacterRace {
  constructor(
    private readonly raceExtractor: CharacterRaceExtractor,
    private readonly characterExtractor: CharacterExtractor,
    private readonly characterPersistor: CharacterPersistor,
  ) {}

  async execute(
    charId: CharacterId,
    raceId: RaceId,
  ): Promise<void | CharacterNotFoundError> {
    const character = await this.characterExtractor.getById(charId);
    if (!character) {
      return new CharacterNotFoundError();
    }

    const race = await this.raceExtractor.getById(raceId);
    if (!race) {
      return new CharacterNotFoundError();
    }

    character.setRace(race);
    await this.characterPersistor.save(character);
  }
}
