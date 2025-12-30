import { type Theme } from "../../utilities";

export type SwitchProps = {
  id: string;
  icon: React.ReactNode;
  swap?: boolean;
  label: string;
  value: Theme | null;
  theme: Theme | null;
  className?: string;
  changeTheme: (theme: Theme | null) => void;
};

export type ThemeSwitchProps = {
  swap?: boolean;
  theme?: Theme;
  className?: string;
  render?: (params: {
    theme: Theme | null;
    setTheme: React.Dispatch<React.SetStateAction<Theme | null>>;
  }) => React.JSX.Element;
};
