export class CharacterName {
  private constructor(readonly value: string) {}

  static from(value: string): CharacterName {
    return new CharacterName(value);
  }
}
