import { IsInt, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsInt()
  age: number;
}
