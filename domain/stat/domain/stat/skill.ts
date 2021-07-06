export enum ESkillType {
  Appraise,
  Balance,
  Survival,
  Bluff,
  Climb,
  Concentation,
  Diplomacy,
  Intimmidate,
  Proffesion,
  Craft,
  DisableDevice,
  OpenLock,
  Knowledge,
  EscapeArtist,
  SleightOfHand,
  Traps,
  Performance,
  CraftWeapon,
  CraftArmour,
  CraftAlchemy,
  Spellcraft,
  HandleAnimal,
  Heal,
  CraftTraps,
}

export class Skill {
  constructor(
    private readonly type: ESkillType,
    private readonly value: number
  ) {}
}
