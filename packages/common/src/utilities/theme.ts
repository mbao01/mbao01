import Cookies from "universal-cookie";

export type Theme = "dark" | "light";

export const THEME_COOKIE_NAME = "data-theme";

export const getTheme = () => {
  if (typeof window === "undefined") return null;

  const cookies = new Cookies();
  const theme = cookies.get(THEME_COOKIE_NAME) as Theme;
  return theme;
};

export const getSystemTheme = (): Theme => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const saveTheme = (theme: Theme) => {
  const cookies = new Cookies();
  cookies.set(THEME_COOKIE_NAME, theme, { path: "/", secure: true });
  document.body.setAttribute(THEME_COOKIE_NAME, theme);
};
