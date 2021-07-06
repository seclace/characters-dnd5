import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { GetCharacterSymbol } from '@app/character/character.providers';
import { GetCharacter } from '@character/usecase/character/get-character';
import { CharacterNotFoundError } from '@character/usecase/character/error/character-not-found.error';

@Injectable()
export class CharacterService {
  constructor(
    @Inject(GetCharacterSymbol)
    private readonly getCharacter: GetCharacter,
  ) {}

  async getCharacterById(id: string): Promise<any> {
    const character = await this.getCharacter.execute(id);
    if (character instanceof CharacterNotFoundError) {
      throw new NotFoundException('Character not found');
    }
    return character;
  }
}
