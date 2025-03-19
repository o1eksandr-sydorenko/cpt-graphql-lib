import { InputType, Field } from 'type-graphql';
import { IsOptional, IsNumber, IsArray } from 'class-validator';

@InputType()
export class NumberFilter {
  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  equals?: number;

  @Field(() => [Number], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  in?: number[];

  @Field(() => [Number], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  notIn?: number[];

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  lt?: number;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  lte?: number;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  gt?: number;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  gte?: number;
}
