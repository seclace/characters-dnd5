import { Stat } from '../../../stat/domain/stat/stat';
import { Ability } from '../../../ability/domain/ability/ability';

export enum ERaceName {
  Aasimar = 'Aasimar',
  Gnome = 'Gnome',
  Goblin = 'Goblin',
  Dwarf = 'Dwarf',
  Genasi = 'Genasi',
  Dragonborn = 'Dragonborn',
  Kenku = 'Kenku',
  Kobold = 'Kobold',
  Lizardfolk = 'Lizardfolk',
  Orc = 'Orc',
  HalfOrc = 'HalfOrc',
  Halfling = 'Halfling',
  HalfElf = 'HalfElf',
  Tabaxi = 'Tabaxi',
  Tiefling = 'Tiefling',
  Tortle = 'Tortle',
  Hobgoblin = 'Hobgoblin',
  Human = 'Human',
  Elf = 'Elf',
  Temporary = 'Temporary',
}
export type RaceId = string;
export type RaceSize = 'small' | 'medium' | 'large';

export interface RaceIdGenerator {
  generate(): Promise<RaceId>;
}

export class Race {
  constructor(
    private readonly id: RaceId,
    private readonly name: ERaceName,
    private readonly size: RaceSize,
    private readonly stats: Stat[],
    private readonly abilities: Ability[],
  ) {}

  static async createEmpty(idGenerator: RaceIdGenerator): Promise<Race> {
    return new Race(
      await idGenerator.generate(),
      ERaceName.Temporary,
      'medium',
      [],
      [],
    );
  }
}
