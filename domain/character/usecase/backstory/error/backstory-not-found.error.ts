import { BusinessError } from '@common/types/error/business-error';

export class BackstoryNotFoundError extends BusinessError {
  constructor() {
    super('backstory not found');
  }
}
