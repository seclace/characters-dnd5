import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { CreateCharacterSymbol, GetAllCharactersSymbol, GetCharacterSymbol } from '@app/character/character.providers';
import { GetCharacter } from '@character/usecase/character/get-character';
import { CharacterNotFoundError } from '@character/usecase/character/error/character-not-found.error';
import { Character } from '@character/domain/character/character';
import { CreateCharacter } from '@character/usecase/character/create-character';
import { CreateCharacterDto } from '@app/character/dto/create-character.dto';
import { CreateCharacterError } from '@character/usecase/character/error/create-character.error';
import { GetAllCharacters } from '@character/usecase/character/get-all-characters';

@Injectable()
export class CharacterService {
  constructor(
    @Inject(GetCharacterSymbol)
    private readonly getCharacterUseCase: GetCharacter,
    @Inject(CreateCharacterSymbol)
    private readonly createCharacterUseCase: CreateCharacter,
    @Inject(GetAllCharactersSymbol)
    private readonly getAllCharactersUseCase: GetAllCharacters,
  ) {}

  async getCharacterById(id: string): Promise<Character> {
    const character = await this.getCharacterUseCase.execute(id);
    if (character instanceof CharacterNotFoundError) {
      throw new NotFoundException('Character not found');
    }
    return character;
  }

  async createCharacter(dto: CreateCharacterDto): Promise<Character> {
    const character = await this.createCharacterUseCase.execute(
      dto.name,
      dto.level,
      dto.age,
      dto.raceId,
      dto.classId,
      dto.backstoryId,
    );
    if (character instanceof CreateCharacterError) {
      throw new BadRequestException(`Character creation error: ${character.e}`);
    }
    return character;
  }

  async getAllCharacters(): Promise<Character[]> {
    return await this.getAllCharactersUseCase.execute();
  }
}
