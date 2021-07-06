import { Character } from '../../domain/character/character';

export interface CharacterPersistor {
  save(character: Character): Promise<void>;
}
