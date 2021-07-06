import { Provider } from '@nestjs/common';
import { InMemoryBackstoryRepository } from '@backstory/persistence/backstory/in-memory-backstory-repository';
import { BackstoryExtractor } from '@backstory/usecase/backstory/backstory-extractor';
import { GetAllBackstoriesUseCase } from '@backstory/usecase/backstory/get-all-backstories.use-case';

export const BackstoryRepoSymbol = Symbol('BackstoryRepo');
export const backstoryRepoProvider: Provider = {
  provide: BackstoryRepoSymbol,
  useClass: InMemoryBackstoryRepository,
};

export const GetBackstoriesSymbol = Symbol('GetBackstories');
export const getBackstoriesProvider: Provider = {
  provide: GetBackstoriesSymbol,
  useFactory: (classExtractor: BackstoryExtractor) => {
    return new GetAllBackstoriesUseCase(classExtractor);
  },
  inject: [BackstoryRepoSymbol],
};
