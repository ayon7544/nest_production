import { IsOptional, IsString } from 'class-validator';

export class CreateRemoteServerDto {
  @IsString()
  name!: string;
  @IsOptional()
  @IsString()
  description?: string;
  @IsString()
  config!: Record<string, any>;
}
