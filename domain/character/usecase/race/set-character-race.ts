import { RaceId } from '@race/domain/race/race';

import { CharacterNotFoundError } from '../character/error/character-not-found.error';
import { CharacterId } from '@character/domain/character/character-id';

export interface SetCharacterRace {
  execute(
    charId: CharacterId,
    raceId: RaceId,
  ): Promise<void | CharacterNotFoundError>;
}
