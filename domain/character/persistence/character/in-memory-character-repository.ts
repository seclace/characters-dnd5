import { Character, CharacterId } from '../../domain/character/character';
import { CharacterExtractor } from '../../usecase/character/character-extractor';
import { CharacterPersistor } from '../../usecase/character/character-persistor';

export class InMemoryCharacterRepository implements CharacterExtractor, CharacterPersistor {
  private characters: Map<CharacterId, Character> = new Map<CharacterId, Character>();

  async getById(charId: CharacterId): Promise<Character | undefined> {
    return this.characters.get(charId);
  }

  async save(character: Character): Promise<void> {
    this.characters.set(character.id, character);
  }
}
