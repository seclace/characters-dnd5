import { Backstory } from '@backstory/domain/backstory/backstory';

export interface GetAllBackstories {
  execute(): Promise<Backstory[]>;
}
