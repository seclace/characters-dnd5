import { Character } from '../../domain/character/character';

export interface GetAllCharacters {
  execute(): Promise<Character[]>;
}
