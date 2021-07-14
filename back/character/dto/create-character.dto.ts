import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  @IsNotEmpty()
  readonly name!: string;

  @IsNumber()
  @IsNotEmpty()
  readonly age!: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly level!: number;

  @IsString()
  @IsNotEmpty()
  readonly raceId!: string;

  @IsString()
  @IsNotEmpty()
  readonly classId!: string;

  @IsString()
  @IsNotEmpty()
  readonly backstoryId!: string;
}
