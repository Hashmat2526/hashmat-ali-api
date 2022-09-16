import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
  IsString,
} from 'class-validator';
import { AllowNull, Column } from 'sequelize-typescript';

export class UserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}

export class SignupDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @Column
  readonly email: string;

  @AllowNull(false)
  @ApiProperty()
  @MinLength(6)
  @Column
  readonly password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly username: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}
