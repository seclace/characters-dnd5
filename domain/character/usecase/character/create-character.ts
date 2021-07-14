import { Character } from '@character/domain/character/character';
import { CreateCharacterError } from '@character/usecase/character/error/create-character.error';

export interface CreateCharacter {
  execute(
    name: string,
    level: number,
    age: number,
    raceId: string,
    classId: string,
    backstoryId: string,
  ): Promise<Character | CreateCharacterError>;
}
