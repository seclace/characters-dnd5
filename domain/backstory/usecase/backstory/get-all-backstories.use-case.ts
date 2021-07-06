import { Backstory } from '@backstory/domain/backstory/backstory';
import { GetAllBackstories } from '@backstory/usecase/backstory/get-all-backstories';
import { BackstoryExtractor } from '@backstory/usecase/backstory/backstory-extractor';

export class GetAllBackstoriesUseCase implements GetAllBackstories {
  constructor(private readonly backstoryExtractor: BackstoryExtractor) {}

  async execute(): Promise<Backstory[]> {
    return this.backstoryExtractor.getAll();
  }
}
