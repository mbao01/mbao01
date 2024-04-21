export type Theme = "dark" | "light";

export const getTheme = () => {
  if (typeof window === "undefined") return null;

  let t = window.localStorage.getItem("__theme") as Theme;
  if (!t)
    t = window.matchMedia("(prefers-color-scheme: dark)")?.matches
      ? "dark"
      : "light";
  return t;
};

export const saveTheme = (theme: Theme) => {
  document.body.setAttribute("data-theme", theme);
  window.localStorage.setItem("__theme", theme);
};
