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
  {
    id: 'story-2',
    name: 'Шарлатан',
    description: `Вы хорошо знаете людей. Вы понимаете, что ими движет, и можете распознать их самые сокровенные желания спустя всего пару минут после начала разговора. Несколько наводящих вопросов, и вот вы уже читаете их словно книжки, написанные для детей. Это полезный талант, и вы вполне готовы использовать его себе на благо.

Вы знаете, что люди хотят, и вы даёте им это, или же обещаете дать. Чувство здравого смысла должно заставлять людей держаться подальше от тех вещей, которые слишком хорошо звучат, чтобы быть правдой. Но здравый смысл куда-то улетучивается, когда вы неподалёку. Бутылочка с розовой жидкостью всенепременно вылечит эту неблаговидную сыпь, а эта чудодейственная мазь (не более чем горсть жира, смешанного с серебряной пылью) без сомнения вернёт молодость и энергичность. Все эти чудеса, конечно, звучат неправдоподобно, но вы знаете, как преподнести их так, чтобы они казались крайне выгодным делом.

Владение навыками: Ловкость рук, Обман

Владение инструментами: Набор для грима, набор для фальсификации

Снаряжение: Комплект отличной одежды, набор для грима, приспособление для жульничества на ваш выбор (десять запечатанных бутылей с подкрашенной жидкостью, набор шулерских костей, колода краплёных карт или кольцо с печатью какого-нибудь воображаемого герцога), поясной кошель с 15 зм`,
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
