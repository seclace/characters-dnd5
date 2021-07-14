import { Character } from '../../domain/character/character';
import { CharacterId } from '@character/domain/character/character-id';

export interface CharacterExtractor {
  getById(charId: CharacterId): Promise<Character | undefined>;
  getAll(): Promise<Character[]>;
}
