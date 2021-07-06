import { Race, RaceId } from '@race/domain/race/race';
import { Class, ClassId } from '@class/domain/class/class';
import { Backstory, BackstoryId } from '@backstory/domain/backstory/backstory';

export type CharacterId = string;
export type CharacterName = string;
export type CharacterAge = number;

export class Character {
  private charRace: Race | undefined;
  private charClass: Class | undefined;
  private charBackstory: Backstory | undefined;

  constructor(
    readonly id: CharacterId,
    readonly name: CharacterName,
    readonly age: CharacterAge,
    readonly raceId: RaceId,
    readonly classId: ClassId,
    readonly backstoryId: BackstoryId,
  ) {}

  setRace(race: Race) {
    this.charRace = race;
  }

  setClass(charClass: Class) {
    this.charClass = charClass;
  }

  setBackstory(charBackstory: Backstory) {
    this.charBackstory = charBackstory;
  }
}
