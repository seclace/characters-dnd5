import { ClassId } from '@class/domain/class/class';

import { CharacterNotFoundError } from '../character/error/character-not-found.error';
import { CharacterId } from '@character/domain/character/character-id';

export interface SetCharacterBackstory {
  execute(
    charId: CharacterId,
    classId: ClassId,
  ): Promise<void | CharacterNotFoundError>;
}
