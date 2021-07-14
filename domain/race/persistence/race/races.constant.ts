import { ERaceName, RaceSize } from '@race/domain/race/race';
import { Stat } from '@stat/domain/stat/stat';
import { Ability } from '@ability/domain/ability/ability';

export const races: Array<{
  id: string;
  name: ERaceName;
  size: RaceSize;
  stats: Stat[];
  abilities: Ability[];
}> = [
  {
    id: 'race-Aasimar-1',
    name: ERaceName.Aasimar,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Elf-1',
    name: ERaceName.Elf,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Orc-1',
    name: ERaceName.Orc,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Dwarf-1',
    name: ERaceName.Dwarf,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Dragonborn-1',
    name: ERaceName.Dragonborn,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Genasi-1',
    name: ERaceName.Genasi,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Gnome-1',
    name: ERaceName.Gnome,
    size: 'small',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Goblin-1',
    name: ERaceName.Goblin,
    size: 'small',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-HalfElf-1',
    name: ERaceName.HalfElf,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Halfling-1',
    name: ERaceName.Halfling,
    size: 'small',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-HalfOrc-1',
    name: ERaceName.HalfOrc,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Hobgoblin-1',
    name: ERaceName.Hobgoblin,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Human-1',
    name: ERaceName.Human,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Kenku-1',
    name: ERaceName.Kenku,
    size: 'small',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Lizardfolk-1',
    name: ERaceName.Lizardfolk,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Tabaxi-1',
    name: ERaceName.Tabaxi,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Tiefling-1',
    name: ERaceName.Tiefling,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Tortle-1',
    name: ERaceName.Tortle,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Temporary-1',
    name: ERaceName.Temporary,
    size: 'medium',
    stats: [],
    abilities: [],
  },
  {
    id: 'race-Kobold-1',
    name: ERaceName.Kobold,
    size: 'small',
    stats: [],
    abilities: [],
  },
];
