import { Backstory, BackstoryId } from '@backstory/domain/backstory/backstory';

export interface BackstoryExtractor {
  getAll(): Promise<Backstory[]>;
  getById(backstoryId: BackstoryId): Promise<Backstory | undefined>;
}
