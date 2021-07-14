import { ClassId } from '@class/domain/class/class';

import { SetCharacterClass } from './set-character-class';
import { CharacterClassExtractor } from './character-class-extractor';
import { CharacterPersistor } from '../character/character-persistor';
import { CharacterExtractor } from '../character/character-extractor';
import { CharacterNotFoundError } from '../character/error/character-not-found.error';
import { CharacterId } from '@character/domain/character/character-id';

export class SetCharacterClassUseCase implements SetCharacterClass {
  constructor(
    private readonly classExtractor: CharacterClassExtractor,
    private readonly characterExtractor: CharacterExtractor,
    private readonly characterPersistor: CharacterPersistor,
  ) {}

  async execute(
    charId: CharacterId,
    classId: ClassId,
  ): Promise<void | CharacterNotFoundError> {
    const character = await this.characterExtractor.getById(charId);
    if (!character) {
      return new CharacterNotFoundError();
    }

    const charClass = await this.classExtractor.getById(classId);
    if (!charClass) {
      return new CharacterNotFoundError();
    }

    character.setClass(charClass);
    await this.characterPersistor.save(character);
  }
}
