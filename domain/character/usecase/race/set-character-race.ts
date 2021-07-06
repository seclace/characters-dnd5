import { RaceId } from '@race/domain/race/race';

import { CharacterId } from '../../domain/character/character';
import { CharacterNotFoundError } from '../character/error/character-not-found.error';

export interface SetCharacterRace {
  execute(charId: CharacterId, raceId: RaceId): Promise<void | CharacterNotFoundError>;
}
