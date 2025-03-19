import { InputType, Field } from 'type-graphql';
import { IsOptional, IsDate, IsArray } from 'class-validator';

@InputType()
export class DateFilter {
  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  equals?: Date;

  @Field(() => [Date], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsDate({ each: true })
  in?: Date[];

  @Field(() => [Date], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsDate({ each: true })
  notIn?: Date[];

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  lt?: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  lte?: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  gt?: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  gte?: Date;
}
