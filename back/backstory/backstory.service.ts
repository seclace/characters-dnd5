import { Inject, Injectable } from '@nestjs/common';
import { GetBackstoriesSymbol } from '@app/backstory/backstory.providers';
import { GetAllBackstories } from '@backstory/usecase/backstory/get-all-backstories';

@Injectable()
export class BackstoryService {
  constructor(
    @Inject(GetBackstoriesSymbol)
    private readonly getAllBackstories: GetAllBackstories,
  ) {}

  async getBackstories() {
    return this.getAllBackstories.execute();
  }
}
