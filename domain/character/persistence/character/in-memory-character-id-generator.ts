import { CharacterId, CharacterIdGenerator } from '@character/domain/character/character-id';
import { v4 } from 'uuid';

export class InMemoryCharacterIdGenerator implements CharacterIdGenerator {
  async generate(): Promise<CharacterId> {
    const uuid = v4();
    return CharacterId.from(uuid);
  }
}
