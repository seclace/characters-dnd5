import { Stat } from '@stat/domain/stat/stat';
import { Ability, AbilityLevel } from '@ability/domain/ability/ability';

export enum EClassType {
  Artificer = 'Artificer',
  Bard = 'Bard',
  Barbarian = 'Barbarian',
  Fighter = 'Fighter',
  Wizard = 'Wizard',
  Druid = 'Druid',
  Cleric = 'Cleric',
  Warlock = 'Warlock',
  Monk = 'Monk',
  Paladin = 'Paladin',
  Rogue = 'Rogue',
  Ranger = 'Ranger',
  Sorcerer = 'Sorcerer',
}
export enum EClassName {
  Artificer = 'Изобретатель',
  Bard = 'Бард',
  Barbarian = 'Варвар',
  Fighter = 'Воин',
  Wizard = 'Волшебник',
  Druid = 'Друид',
  Cleric = 'Жрец',
  Warlock = 'Колдун',
  Monk = 'Монах',
  Paladin = 'Паладин',
  Rogue = 'Плут',
  Ranger = 'Следопыт',
  Sorcerer = 'Чародей',
}
export type ClassId = string;
export type ClassName = string;
export type ClassDescription = string;

export interface ClassStub {
  id: ClassId,
  type: EClassType,
  name: EClassName,
  description: ClassDescription,
  stats: Stat[],
  abilities: Ability[],
}

export class Class {
  constructor(
    private readonly id: ClassId,
    private readonly type: EClassType,
    private readonly name: EClassName,
    private readonly description: ClassDescription,
    private readonly stats: Stat[],
    private readonly abilities: Ability[],
  ) {}

  async getAbilitiesForLevel(level: AbilityLevel): Promise<Ability[]> {
    return this.abilities.filter(a => a.getLevel() === level);
  }
}
