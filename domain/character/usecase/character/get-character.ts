import { Character } from '../../domain/character/character';
import { CharacterNotFoundError } from './error/character-not-found.error';

export interface GetCharacter {
  execute(charId: string): Promise<Character | CharacterNotFoundError>;
}
