import { Race, RaceId } from '@race/domain/race/race';
import { Class, ClassId } from '@class/domain/class/class';
import { Backstory, BackstoryId } from '@backstory/domain/backstory/backstory';
import { CharacterId } from '@character/domain/character/character-id';
import { CharacterName } from '@character/domain/character/character-name';
import { CharacterAge } from '@character/domain/character/character-age';
import { CharacterLevel } from '@character/domain/character/character-level';

export class Character {
  private charRace: Race | undefined;
  private charClass: Class | undefined;
  private charBackstory: Backstory | undefined;

  constructor(
    readonly id: CharacterId,
    readonly name: CharacterName,
    readonly level: CharacterLevel,
    readonly age: CharacterAge,
    readonly raceId: RaceId,
    readonly classId: ClassId,
    readonly backstoryId: BackstoryId,
  ) {}

  getRace() {
    return this.charRace;
  }
  setRace(race: Race) {
    this.charRace = race;
  }

  getClass() {
    return this.charClass;
  }
  setClass(charClass: Class) {
    this.charClass = charClass;
  }

  getBackstory() {
    return this.charBackstory;
  }
  setBackstory(charBackstory: Backstory) {
    this.charBackstory = charBackstory;
  }
}
