import { BackstoryId } from '@backstory/domain/backstory/backstory';

import { SetCharacterBackstory } from './set-character-backstory';
import { CharacterId } from '../../domain/character/character';
import { CharacterBackstoryExtractor } from './character-backstory-extractor';
import { CharacterPersistor } from '../character/character-persistor';
import { CharacterExtractor } from '../character/character-extractor';
import { CharacterNotFoundError } from '../character/error/character-not-found.error';

export class SetCharacterBackstoryUseCase implements SetCharacterBackstory {
  constructor(
    private readonly backstoryExtractor: CharacterBackstoryExtractor,
    private readonly characterExtractor: CharacterExtractor,
    private readonly characterPersistor: CharacterPersistor,
  ) {}

  async execute(
    charId: CharacterId,
    backstoryId: BackstoryId,
  ): Promise<void | CharacterNotFoundError> {
    const character = await this.characterExtractor.getById(charId);
    if (!character) {
      return new CharacterNotFoundError();
    }

    const backstory = await this.backstoryExtractor.getById(backstoryId);
    if (!backstory) {
      return new CharacterNotFoundError();
    }

    character.setBackstory(backstory);
    await this.characterPersistor.save(character);
  }
}
