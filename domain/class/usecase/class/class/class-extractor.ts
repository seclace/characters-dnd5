import { Class, ClassId } from '@class/domain/class/class';

export interface ClassExtractor {
  getById(classId: ClassId): Promise<Class | undefined>;
  getAll(): Promise<Class[]>;
}
