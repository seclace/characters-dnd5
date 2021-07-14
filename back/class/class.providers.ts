import { Provider } from '@nestjs/common';
import { GetAllClassesUseCase } from '@class/usecase/class/class/get-all-classes.use-case';
import { InMemoryClassRepository } from '@class/persistence/class/in-memory-class-repository';
import { ClassExtractor } from '@class/usecase/class/class/class-extractor';

export const ClassesRepoSymbol = Symbol('ClassesRepo');
export const classesRepoProvider: Provider = {
  provide: ClassesRepoSymbol,
  useClass: InMemoryClassRepository,
};

export const GetClassesSymbol = Symbol('GetClasses');
export const getClassesProvider: Provider = {
  provide: GetClassesSymbol,
  useFactory: (classExtractor: ClassExtractor) => {
    return new GetAllClassesUseCase(classExtractor);
  },
  inject: [ClassesRepoSymbol],
};
