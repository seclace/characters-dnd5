import { Character, CharacterId } from '../../domain/character/character';
import { CharacterNotFoundError } from './error/character-not-found.error';
import { GetCharacter } from '@character/usecase/character/get-character';
import { CharacterExtractor } from '@character/usecase/character/character-extractor';

export class GetCharacterUseCase implements GetCharacter {
  constructor(
    private readonly characterExtractor: CharacterExtractor,
  ) {}

  async execute(charId: CharacterId): Promise<Character | CharacterNotFoundError> {
    const character = await this.characterExtractor.getById(charId);
    if (!character) {
      return new CharacterNotFoundError();
    }

    return character;
  }
}
