import { BackstoryExtractor } from '@backstory/usecase/backstory/backstory-extractor';
import { CharacterBackstoryExtractor } from '@character/usecase/backstory/character-backstory-extractor';
import { Backstory, BackstoryId } from '@backstory/domain/backstory/backstory';

const stories = [
  {
    id: 'story-1',
    name: 'Прислужник',
    description:
      'Вы провели свою жизнь, служа в храме, посвящённому какому-то конкретному богу или же пантеону богов. Вы — посредник между царством небесным и миром живых. Вы совершали священные ритуалы и приносили жертвоприношения для того чтобы молящиеся могли предстать пред ликом богов. Вы не обязательно жрец — совершение священных обрядов не то же самое, что направление божественной силы.\n' +
      '\n' +
      'Выберите божество, пантеон богов или полубожественную сущность из тех, что перечислены в приложении Б книги игрока или предложены Мастером, и продумайте вместе с Мастером природу вашего религиозного служения. Вы были младшим служкой в храме, с детства помогающим священникам? Или вы верховный жрец, получивший видение, как можно послужить своему богу? Возможно, вы — лидер небольшого культа, не имеющего своего храма, или даже представитель оккультных сил, служивший чудовищному повелителю, но отрёкшийся от него.',
    inventoryItems: [],
    abilities: [],
  },
];

export class InMemoryBackstoryRepository
  implements BackstoryExtractor, CharacterBackstoryExtractor
{
  private backstories: Map<BackstoryId, Backstory> = new Map<
    BackstoryId,
    Backstory
  >();

  constructor() {
    stories.map((s) =>
      this.backstories.set(
        s.id,
        new Backstory(
          s.id,
          s.name,
          s.description,
          s.inventoryItems,
          s.abilities,
        ),
      ),
    );
  }

  async getAll(): Promise<Backstory[]> {
    return [...this.backstories.values()];
  }

  async getById(backstoryId: BackstoryId): Promise<Backstory | undefined> {
    return this.backstories.get(backstoryId);
  }
}
