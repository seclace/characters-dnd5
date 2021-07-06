import { Class } from '@class/domain/class/class';

import { GetAllClasses } from './get-all-classes';
import { ClassExtractor } from '@class/usecase/class/class/class-extractor';

export class GetAllClassesUseCase implements GetAllClasses {
  constructor(private readonly classExtractor: ClassExtractor) {}

  async execute(): Promise<Class[]> {
    return this.classExtractor.getAll();
  }
}
