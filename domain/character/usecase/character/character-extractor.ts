import { Character, CharacterId } from '../../domain/character/character';

export interface CharacterExtractor {
  getById(charId: CharacterId): Promise<Character | undefined>;
}
