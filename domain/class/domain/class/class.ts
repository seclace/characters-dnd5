import { Stat } from '@stat/domain/stat/stat';
import { Ability } from '@ability/domain/ability/ability';

export enum EClassType {
  Bard = 'Bard',
  Barbarian = 'Barbarian',
  Fighter = 'Fighter',
  Wizard = 'Wizard',
  Druid = 'Druid',
  Cleric = 'Cleric',
  Artificer = 'Artificer',
  Warlock = 'Warlock',
  Monk = 'Monk',
  Paladin = 'Paladin',
  Rogue = 'Rogue',
  Ranger = 'Ranger',
  Sorcerer = 'Sorcerer',
}
export type ClassId = string;
export type ClassDescription = string;
export type ClassLevel = number;

export class Class {
  private constructor(
    private readonly id: ClassId,
    private readonly type: EClassType,
    private readonly level: ClassLevel,
    private readonly description: ClassDescription,
    private stats: Stat[],
    private abilities: Ability[],
  ) {}

  attachStats(...stats: Stat[]) {
    this.stats = [...this.stats, ...stats];
  }

  attachAbilities(...abilities: Ability[]) {
    this.abilities = [...this.abilities, ...abilities];
  }
}
