export type AbilityName = string
export type AbilityDescription = string
export type AbilityLevel = string
export type AbilityTarget = 'self' | 'agreed' | 'enemy' | 'any'
export type AbilityUseTime = string
export type AbilitySchool = string
export type AbilityDistance = number
export type AbilityEffectDuration = number
export type AbilityComponent = string

export class Ability {
  private constructor(
    private readonly name: AbilityName,
    private readonly description: AbilityDescription,
    private readonly level: AbilityLevel,
    private readonly targets: AbilityTarget[],
    private readonly useTime: AbilityUseTime,
    private readonly school: AbilitySchool,
    private readonly distance: AbilityDistance,
    private readonly effectDuration: AbilityEffectDuration,
    private readonly components: AbilityComponent[],
  ) {}
}
