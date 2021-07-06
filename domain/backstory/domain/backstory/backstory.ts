import { InventoryItem } from '@inventory/domain/inventory/inventory-item';
import { Ability } from '@ability/domain/ability/ability';

export type BackstoryId = string;
export type BackstoryName = string;
export type BackstoryDescription = string;

export class Backstory {
  constructor(
    private readonly id: BackstoryId,
    private readonly name: BackstoryName,
    private readonly description: BackstoryDescription,
    private readonly inventoryItems: InventoryItem[],
    private readonly abilities: Ability[],
  ) {}
}
