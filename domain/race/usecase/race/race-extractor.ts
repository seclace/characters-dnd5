import { Race, RaceId } from '../../domain/race/race';

export interface RaceExtractor {
  getAll(): Promise<Race[]>;
  getById(raceId: RaceId): Promise<Race | undefined>;
}
