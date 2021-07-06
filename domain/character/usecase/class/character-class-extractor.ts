import { Class, ClassId } from '@class/domain/class/class';

export interface CharacterClassExtractor {
  getById(classId: ClassId): Promise<Class | undefined>;
}
