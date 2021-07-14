import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { CharacterService } from '@app/character/character.service';
import { CharacterTransformInterceptor } from '@app/character/interceptor/character-transform.interceptor';
import { CreateCharacterDto } from '@app/character/dto/create-character.dto';

@Controller('character')
@UseInterceptors(CharacterTransformInterceptor)
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  async getAllCharacters() {
    return this.characterService.getAllCharacters();
  }

  @Get(':id')
  async getCharacter(@Param('id') id: string) {
    return this.characterService.getCharacterById(id);
  }

  @Post()
  async createCharacter(@Body() dto: CreateCharacterDto) {
    return this.characterService.createCharacter(dto);
  }
}
