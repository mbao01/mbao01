import type { ArgTypes, StoryContext, StoryFn } from "@storybook/react";
import type { ComponentProps, ElementType } from "react";

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

const getCategorizedArgs = <T extends unknown>(args: ArgTypes<T>) => {
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
  context.args = getCategorizedArgs(context.args) as T;

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
export const getArgsFromArgTypes = <T extends ArgTypes>(argsTypes: T) => {
  const args = (Object.keys(argsTypes) as (keyof T)[]).reduce(
    (acc, key) => {
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
    {} as Record<keyof T, unknown>
  );

  return args;
};

export const renderer = <T extends ElementType>(Component: T) => {
  return <G,>(props: G) => <Component {...(props as ComponentProps<T>)} />;
};
