import { ClassExtractor } from '@class/usecase/class/class/class-extractor';
import { CharacterClassExtractor } from '@character/usecase/class/character-class-extractor';
import { Class, ClassId } from '@class/domain/class/class';

export class InMemoryClassRepository implements ClassExtractor, CharacterClassExtractor {
  private classes: Map<ClassId, Class> = new Map<ClassId, Class>();

  async getById(classId: ClassId): Promise<Class | undefined> {
    return this.classes.get(classId);
  }

  async getAll(): Promise<Class[]> {
    return [...this.classes.values()];
  }
}
