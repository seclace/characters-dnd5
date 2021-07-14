import { CharacterRaceExtractor } from '@character/usecase/race/character-race-extractor';

import { Race, RaceId } from '../../domain/race/race';
import { RaceExtractor } from '../../usecase/race/race-extractor';
import { races } from './races.constant';

const allRaces = new Map<RaceId, Race>();
races.map(r => allRaces.set(r.id, new Race(r.id, r.name, r.size, r.stats, r.abilities)));

export class InMemoryRaceRepository
  implements RaceExtractor, CharacterRaceExtractor
{
  private races: Map<RaceId, Race> = allRaces;

  async getById(raceId: RaceId): Promise<Race | undefined> {
    return this.races.get(raceId);
  }

  async getAll(): Promise<Race[]> {
    const result: Race[] = [];
    for (const race of this.races.values()) {
      result.push(race);
    }
    return result;
  }
}
