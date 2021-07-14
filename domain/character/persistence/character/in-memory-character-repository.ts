import { Character } from '../../domain/character/character';
import { CharacterExtractor } from '../../usecase/character/character-extractor';
import { CharacterPersistor } from '../../usecase/character/character-persistor';
import { CharacterId } from '@character/domain/character/character-id';

export class InMemoryCharacterRepository
  implements CharacterExtractor, CharacterPersistor
{
  private characters: Map<string, Character> = new Map<
    string,
    Character
  >();

  async getById(charId: CharacterId): Promise<Character | undefined> {
    return this.characters.get(charId.value);
  }

  async getAll(): Promise<Character[]> {
    return [...this.characters.values()];
  }

  async save(character: Character): Promise<void> {
    this.characters.set(character.id.value, character);
  }
}
