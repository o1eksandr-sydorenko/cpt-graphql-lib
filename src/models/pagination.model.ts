import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Pagination {
  @Field(() => Number)
  current_page: number;

  @Field(() => Number, { nullable: true })
  previous_page: number | null;

  @Field(() => Number, { nullable: true })
  next_page: number | null;

  @Field(() => Number)
  count: number;

  @Field(() => Number)
  total: number;

  @Field(() => Boolean)
  is_first_page: boolean;

  @Field(() => Boolean)
  is_last_page: boolean;
}
