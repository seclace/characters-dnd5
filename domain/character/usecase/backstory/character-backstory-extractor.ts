import { Backstory, BackstoryId } from '@backstory/domain/backstory/backstory';

export interface CharacterBackstoryExtractor {
  getById(backstoryId: BackstoryId): Promise<Backstory | undefined>;
}
