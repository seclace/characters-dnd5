export enum EStatType {
  Strength,
  Constitution,
  Dexterity,
  Intelligence,
  Wisdom,
  Charisma,
}

export class Stat {
  constructor(
    private readonly type: EStatType,
    private readonly value: number
  ) {}
}
