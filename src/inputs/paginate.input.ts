import { IsInt, IsOptional, Max } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { maxPaginateLimit } from '../config';

@InputType()
export class PaginateInput {
  @Field(() => Number, { nullable: true })
  @IsInt()
  @Max(maxPaginateLimit)
  @IsOptional()
  limit?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  page?: number;
}
