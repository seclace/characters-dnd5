export interface CharacterIdGenerator {
  generate(): Promise<CharacterId>;
}

export class CharacterId {
  private constructor(readonly value: string) {}

  static from(value: string): CharacterId {
    return new CharacterId(value);
  }
}
