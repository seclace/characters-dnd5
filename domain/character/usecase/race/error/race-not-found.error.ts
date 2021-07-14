import { BusinessError } from '@common/types/error/business-error';

export class RaceNotFoundError extends BusinessError {
  constructor() {
    super('race not found');
  }
}
