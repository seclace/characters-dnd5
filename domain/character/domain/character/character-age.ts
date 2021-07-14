export class CharacterAge {
  private constructor(readonly value: number) {}

  static from(value: number): CharacterAge {
    return new CharacterAge(value);
  }
}
