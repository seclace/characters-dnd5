export class CharacterLevel {
  private constructor(readonly value: number) {}

  static from(value: number): CharacterLevel {
    return new CharacterLevel(value);
  }
}
