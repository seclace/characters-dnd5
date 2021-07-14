import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Character } from '@character/domain/character/character';

function characterToResponse(character: Character) {
  return {
    id: character.id.value,
    name: character.name.value,
    age: character.age.value,
    level: character.level.value,
    race: character.getRace(),
    class: character.getClass(),
    backstory: character.getBackstory()
  };
}

@Injectable()
export class CharacterTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(map((data: Character | Character[]) => Array.isArray(data)
      ? data.map(characterToResponse)
      : characterToResponse(data)));
  }
}
