import { ArgsType, ClassType, Field } from 'type-graphql';
import { PaginateInput } from './paginate.input';

export function GetItemsArgs<F extends object, O extends object>(FilterInputClass: ClassType<F>, OrderByClass: ClassType<O>) {
  @ArgsType()
  abstract class GetItemsInput {
    @Field(() => FilterInputClass, { nullable: true })
    filter?: F;

    @Field(() => OrderByClass, { nullable: true })
    orderBy?: O;

    @Field(() => PaginateInput, { nullable: true })
    paginate?: PaginateInput;
  }

  return GetItemsInput;
}
