import { Controller, Get, Param } from '@nestjs/common';
import { CharacterService } from '@app/character/character.service';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get(':id')
  async characters(@Param('id') id: string) {
    return this.characterService.getCharacterById(id);
  }
}
