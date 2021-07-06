import { Race, RaceId } from '@race/domain/race/race';

export interface CharacterRaceExtractor {
  getById(raceId: RaceId): Promise<Race | undefined>;
}
