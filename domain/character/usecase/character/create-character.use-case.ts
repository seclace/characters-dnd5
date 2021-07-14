import { Character } from '@character/domain/character/character';
import { CreateCharacter } from '@character/usecase/character/create-character';
import { CharacterIdGenerator } from '@character/domain/character/character-id';
import { CharacterName } from '@character/domain/character/character-name';
import { CharacterAge } from '@character/domain/character/character-age';
import { CharacterLevel } from '@character/domain/character/character-level';
import { CharacterPersistor } from '@character/usecase/character/character-persistor';
import { RaceExtractor } from '@race/usecase/race/race-extractor';
import { ClassExtractor } from '@class/usecase/class/class/class-extractor';
import { BackstoryExtractor } from '@backstory/usecase/backstory/backstory-extractor';
import { CreateCharacterError } from '@character/usecase/character/error/create-character.error';
import { RaceNotFoundError } from '@character/usecase/race/error/race-not-found.error';
import { ClassNotFoundError } from '@character/usecase/class/error/class-not-found.error';
import { BackstoryNotFoundError } from '@character/usecase/backstory/error/backstory-not-found.error';

export class CreateCharacterUseCase implements CreateCharacter {
  constructor(
    private readonly characterPersistor: CharacterPersistor,
    private readonly raceExtractor: RaceExtractor,
    private readonly classExtractor: ClassExtractor,
    private readonly backstoryExtractor: BackstoryExtractor,
    private readonly characterIdGenerator: CharacterIdGenerator,
  ) {}

  async execute(
    name: string,
    level: number,
    age: number,
    raceId: string,
    classId: string,
    backstoryId: string,
  ): Promise<Character | CreateCharacterError> {
    try {
      const id = await this.characterIdGenerator.generate();
      const charName = CharacterName.from(name);
      const charAge = CharacterAge.from(age);
      const charLevel = CharacterLevel.from(level);
      const char = new Character(
        id,
        charName,
        charAge,
        charLevel,
        raceId,
        classId,
        backstoryId,
      );
      const race = await this.raceExtractor.getById(raceId);
      if (!race) {
        throw new RaceNotFoundError();
      }
      char.setRace(race);
      const charClass = await this.classExtractor.getById(classId);
      if (!charClass) {
        throw new ClassNotFoundError();
      }
      char.setClass(charClass);
      const backstory = await this.backstoryExtractor.getById(backstoryId);
      if (!backstory) {
        throw new BackstoryNotFoundError();
      }
      char.setBackstory(backstory);

      await this.characterPersistor.save(char);

      return char;
    } catch (e) {
      return new CreateCharacterError(e.e);
    }
  }
}
