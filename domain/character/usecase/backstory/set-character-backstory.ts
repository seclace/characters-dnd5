import { ClassId } from '@class/domain/class/class';

import { CharacterId } from '../../domain/character/character';
import { CharacterNotFoundError } from '../character/error/character-not-found.error';

export interface SetCharacterBackstory {
  execute(
    charId: CharacterId,
    classId: ClassId,
  ): Promise<void | CharacterNotFoundError>;
}
