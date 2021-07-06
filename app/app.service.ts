import { Inject, Injectable } from '@nestjs/common';
import { GetClassesSymbol } from '@app/class/class.providers';
import { GetAllClasses } from '@class/usecase/class/class/get-all-classes';
import { GetRacesSymbol } from '@app/race/race.providers';
import { GetAllRaces } from '@race/usecase/race/get-all-races';
import { GetBackstoriesSymbol } from '@app/backstory/backstory.providers';
import { GetAllBackstories } from '@backstory/usecase/backstory/get-all-backstories';

@Injectable()
export class AppService {
  constructor(
    @Inject(GetClassesSymbol)
    private readonly getAllClasses: GetAllClasses,
    @Inject(GetRacesSymbol)
    private readonly getAllRaces: GetAllRaces,
    @Inject(GetBackstoriesSymbol)
    private readonly getAllBackstories: GetAllBackstories,
  ) {}

  async getClasses(): Promise<any[]> {
    return this.getAllClasses.execute();
  }

  async getRaces(): Promise<any[]> {
    return this.getAllRaces.execute();
  }

  async getBackstories(): Promise<any[]> {
    return this.getAllBackstories.execute();
  }
}
