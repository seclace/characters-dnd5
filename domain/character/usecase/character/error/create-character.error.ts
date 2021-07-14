import { BusinessError } from '@common/types/error/business-error';

export class CreateCharacterError extends BusinessError {
  constructor(e?: string | Error) {
    super(e);
  }
}
