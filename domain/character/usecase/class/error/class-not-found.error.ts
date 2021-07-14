import { BusinessError } from '@common/types/error/business-error';

export class ClassNotFoundError extends BusinessError {
  constructor() {
    super('class not found');
  }
}
