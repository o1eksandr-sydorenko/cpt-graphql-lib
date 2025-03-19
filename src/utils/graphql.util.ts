export const transformGraphQLFields = (fields: object): object => {
  const result: object = {};

  for (const key in fields) {
    if (Object.keys(fields[key]).length === 0) {
      result[key] = true;
    } else {
      // Otherwise, recursively transform nested fields
      result[key] = transformGraphQLFields(fields[key]);
    }
  }

  return result;
};

export const cleanNestedFilterInput = <T extends object>(filter?: T): Partial<T | undefined> => {
  if (!filter) {
    return;
  }

  return Object.fromEntries(
    Object.entries(filter)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          value = value.map((item) => cleanNestedFilterInput(item));
        } else if (typeof value === 'object') {
          value = cleanNestedFilterInput(value);
        }

        return [key, value];
      }),
  ) as T;
};
