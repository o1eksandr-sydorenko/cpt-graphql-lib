import { InputType, Field } from 'type-graphql';
import { IsOptional, IsString, IsArray } from 'class-validator';

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  equals?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  in?: string[];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  notIn?: string[];

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  lt?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  lte?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  gt?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  gte?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  contains?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  startsWith?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  endsWith?: string;
}
