import { ArgTypes, StoryContext, StoryFn } from "@storybook/react";

export const categorizeArgs = (args: ArgTypes, category: string) => {
  return Object.entries(args).reduce((acc, [name, arg]) => {
    const categoryName = `${category} ${name}`;
    acc[categoryName] = {
      ...arg,
      name,
      table: {
        ...arg.table,
        category,
      },
    };
    return acc;
  }, {} as ArgTypes);
};

const getCategoryProps = <T,>(args: ArgTypes<T>) => {
  return Object.entries(args).reduce((acc, [categoryName, value]) => {
    const [category, name] = categoryName.split(" ");
    acc[category] = {
      ...acc[category],
      [name]: value,
    };
    return acc;
  }, {} as ArgTypes);
};

export const withArgs = <T extends object>(Component: StoryFn, context: StoryContext<T>) => {
  context.args = getCategoryProps(context.args) as T;

  return <Component />;
};

const convertStringToJSON = (str: string) => {
  let newStr = str.replace(/'/g, '"');
  newStr = newStr.replace(/(\w+)\s*:/g, '"$1":');

  try {
    return JSON.parse(newStr);
  } catch (e) {
    return str;
  }
};

// A helper function to generate Args for a story based on ArgsTypes objects
export const getArgsFromArgTypes = (argsTypes: ArgTypes): Record<string, unknown> => {
  const args = Object.keys(argsTypes).reduce(
    (acc, key: string) => {
      const defaultValue =
        argsTypes[key].defaultValue ?? argsTypes[key].table?.defaultValue?.summary;
      if (defaultValue) {
        try {
          acc[key] = convertStringToJSON(String(defaultValue));
        } catch (e) {
          acc[key] = defaultValue;
        }
      }
      return acc;
    },
    {} as Record<string, unknown>
  );

  return args;
};
