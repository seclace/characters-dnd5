import { ClassExtractor } from '@class/usecase/class/class/class-extractor';
import { CharacterClassExtractor } from '@character/usecase/class/character-class-extractor';
import { Class, ClassId } from '@class/domain/class/class';
import { allClasses } from '@class/persistence/class/classes.constant';

const allClassesMap = new Map<ClassId, Class>();
allClasses.map(c => allClassesMap.set(
  c.id,
  new Class(c.id, c.type, c.name, c.description, c.stats, c.abilities)
));

export class InMemoryClassRepository
  implements ClassExtractor, CharacterClassExtractor
{
  private classes: Map<ClassId, Class> = allClassesMap;

  async getById(classId: ClassId): Promise<Class | undefined> {
    return this.classes.get(classId);
  }

  async getAll(): Promise<Class[]> {
    return [...this.classes.values()];
  }
}
