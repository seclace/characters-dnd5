import { Character } from '../../domain/character/character';
import { CharacterNotFoundError } from './error/character-not-found.error';
import { GetCharacter } from '@character/usecase/character/get-character';
import { CharacterExtractor } from '@character/usecase/character/character-extractor';
import { CharacterId } from '@character/domain/character/character-id';

export class GetCharacterUseCase implements GetCharacter {
  constructor(private readonly characterExtractor: CharacterExtractor) {}

  async execute(id: string): Promise<Character | CharacterNotFoundError> {
    const charId = CharacterId.from(id);
    const character = await this.characterExtractor.getById(charId);
    if (!character) {
      return new CharacterNotFoundError();
    }

    return character;
  }
}
