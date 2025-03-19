import { ClassType, Field, InputType } from 'type-graphql';

export function FilterInput<TBaseFilterInput extends ClassType>(TBaseFilterInputClass: TBaseFilterInput) {
  @InputType()
  abstract class FilterInputClass extends TBaseFilterInputClass {
    @Field(() => [TBaseFilterInputClass], { nullable: true })
    OR?: TBaseFilterInput[];

    @Field(() => [TBaseFilterInputClass], { nullable: true })
    AND?: TBaseFilterInput[];

    @Field(() => [TBaseFilterInputClass], { nullable: true })
    NOT?: TBaseFilterInput[];
  }

  return FilterInputClass;
}
