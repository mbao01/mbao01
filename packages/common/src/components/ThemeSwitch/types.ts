import { type Theme } from "../../utilities";

export type ThemeSwitchProps = React.ComponentPropsWithoutRef<"label"> & {
  name?: string;
  theme?: Theme;
  render?: (params: {
    theme: Theme | null;
    setTheme: React.Dispatch<React.SetStateAction<Theme | null>>;
  }) => JSX.Element;
};
