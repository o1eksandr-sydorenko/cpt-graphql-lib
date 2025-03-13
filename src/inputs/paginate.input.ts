import { IsInt, IsOptional } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class PaginateInput {
  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  limit?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  page?: number;
}
