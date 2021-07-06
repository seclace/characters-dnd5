import { Character, CharacterId } from '../../domain/character/character';
import { CharacterNotFoundError } from './error/character-not-found.error';

export interface GetCharacter {
  execute(charId: CharacterId): Promise<Character | CharacterNotFoundError>;
}
