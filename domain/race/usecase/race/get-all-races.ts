import { Race } from '../../domain/race/race';

export interface GetAllRaces {
  execute(): Promise<Race[]>;
}
