import { Provider } from '@nestjs/common';
import { InMemoryRaceRepository } from '@race/persistence/race/in-memory-race-repository';
import { GetAllRacesUseCase } from '@race/usecase/race/get-all-races.use-case';
import { RaceExtractor } from '@race/usecase/race/race-extractor';

export const RacesRepoSymbol = Symbol('RacesRepo');
export const racesRepoProvider: Provider = {
  provide: RacesRepoSymbol,
  useClass: InMemoryRaceRepository,
};

export const GetRacesSymbol = Symbol('GetRaces');
export const getRacesProvider: Provider = {
  provide: GetRacesSymbol,
  useFactory: (classExtractor: RaceExtractor) => {
    return new GetAllRacesUseCase(classExtractor);
  },
  inject: [RacesRepoSymbol],
};
