import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class PostDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(4)
  readonly title: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(4)
  readonly type: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly body: string;
}

export class PostUpdateDto {
  @ApiProperty()
  @IsOptional()
  @MinLength(4)
  readonly title: string;

  @ApiProperty()
  @IsOptional()
  @MinLength(4)
  readonly type: string;

  @ApiProperty()
  @IsOptional()
  readonly body: string;
}

export class OutPostDto {
  @Expose()
  @IsNotEmpty()
  @MinLength(4)
  readonly title: string;

  @Expose()
  @IsNotEmpty()
  @MinLength(4)
  readonly type: string;

  @Expose()
  @IsNotEmpty()
  readonly body: string;
}
