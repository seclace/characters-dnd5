import { Character } from '../../domain/character/character';
import { GetAllCharacters } from '@character/usecase/character/get-all-characters';
import { CharacterExtractor } from '@character/usecase/character/character-extractor';

export class GetAllCharactersUseCase implements GetAllCharacters {
  constructor(private readonly characterExtractor: CharacterExtractor) {}

  async execute(): Promise<Character[]> {
    return this.characterExtractor.getAll();
  }
}
