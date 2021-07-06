import { RaceId, RaceIdGenerator } from '../../domain/race/race';
import { v4 as uuid } from 'uuid';

export class InMemoryRaceIdGenerator implements RaceIdGenerator {
  async generate(): Promise<RaceId> {
    return uuid();
  }
}
