import Cookies from "universal-cookie";

export type Theme = "dark" | "light";

export const THEME_COOKIE_NAME = "data-theme";

const getSystemTheme = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const getTheme = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const cookies = new Cookies();
  const theme = (cookies.get(THEME_COOKIE_NAME) ?? getSystemTheme()) as Theme | null;
  return theme;
};

export const saveTheme = (theme: Theme | null) => {
  const cookies = new Cookies();

  if (!theme) {
    cookies.remove(THEME_COOKIE_NAME);
    document.body.removeAttribute(THEME_COOKIE_NAME);
    return;
  }

  cookies.set(THEME_COOKIE_NAME, theme, { path: "/", secure: true });
  document.body.setAttribute(THEME_COOKIE_NAME, theme);
};
