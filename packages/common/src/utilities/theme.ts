type Theme = "dark" | "light" | "system";

export const getTheme = () => {
  if (typeof window === "undefined") return null;

  let t = window.localStorage.getItem("__theme") as Theme;
  if (!t)
    t = window.matchMedia("(prefers-color-scheme: dark)")?.matches
      ? "dark"
      : window.matchMedia("(prefers-color-scheme: light)")?.matches
        ? "light"
        : "system";
  return t;
};

export const saveTheme = (theme: Theme) => {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("__theme", theme);
};
