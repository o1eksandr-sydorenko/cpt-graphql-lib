import { ClassType, Field, InputType } from 'type-graphql';
import { SortOrder } from '../enums';

export function SortInput<T extends object>(_classRef: ClassType<T>, fields: (keyof T)[]): ClassType {
  @InputType()
  abstract class DynamicSortInput {}

  fields.forEach((field) => {
    Object.defineProperty(DynamicSortInput.prototype, field, {
      writable: true,
      enumerable: true,
    });

    Field(() => SortOrder, { nullable: true })(DynamicSortInput.prototype, field as string);
  });

  return DynamicSortInput as ClassType;
}
