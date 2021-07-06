import { Race } from '@race/domain/race/race';

import { GetAllRaces } from './get-all-races';
import { RaceExtractor } from './race-extractor';

export class GetAllRacesUseCase implements GetAllRaces {
  constructor(private readonly raceExtractor: RaceExtractor) {}

  async execute(): Promise<Race[]> {
    return this.raceExtractor.getAll();
  }
}
