import { Class } from '@class/domain/class/class';

export interface GetAllClasses {
  execute(): Promise<Class[]>;
}
