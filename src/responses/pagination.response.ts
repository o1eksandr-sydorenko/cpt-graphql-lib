import { ClassType, Field, ObjectType } from 'type-graphql';
import { Pagination } from '../models';

export function PaginatedResponse<TItem extends object>(TItemClass: ClassType<TItem>) {
  @ObjectType()
  abstract class PaginatedResponseClass {
    @Field(() => [TItemClass])
    items: TItem[];

    @Field(() => Pagination)
    pagination: Pagination;
  }

  return PaginatedResponseClass;
}
