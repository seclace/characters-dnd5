import { Inject, Injectable } from '@nestjs/common';
import { GetRacesSymbol } from '@app/race/race.providers';
import { GetAllRaces } from '@race/usecase/race/get-all-races';

@Injectable()
export class RaceService {
  constructor(
    @Inject(GetRacesSymbol)
    private readonly getAllRaces: GetAllRaces,
  ) {}

  async getRaces(): Promise<any[]> {
    return this.getAllRaces.execute();
  }
}
