import { CharacterRaceExtractor } from '@character/usecase/race/character-race-extractor';

import { Race, RaceId } from '../../domain/race/race';
import { RaceExtractor } from '../../usecase/race/race-extractor';

export class InMemoryRaceRepository
  implements RaceExtractor, CharacterRaceExtractor
{
  private races: Map<RaceId, Race> = new Map<RaceId, Race>();

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
