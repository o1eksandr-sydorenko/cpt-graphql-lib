import { InputType, Field } from 'type-graphql';
import { IsOptional, IsBoolean } from 'class-validator';

@InputType()
export class BooleanFilter {
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  equals?: boolean;
}
