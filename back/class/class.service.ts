import { Inject, Injectable } from '@nestjs/common';
import { GetClassesSymbol } from '@app/class/class.providers';
import { GetAllClasses } from '@class/usecase/class/class/get-all-classes';

@Injectable()
export class ClassService {
  constructor(
    @Inject(GetClassesSymbol)
    private readonly getAllClasses: GetAllClasses,
  ) {}

  async getClasses(): Promise<any[]> {
    return this.getAllClasses.execute();
  }
}
