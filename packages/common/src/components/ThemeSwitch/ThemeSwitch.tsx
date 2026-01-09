"use client";

import { useLayoutEffect, useState } from "react";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import type { SwitchProps, ThemeSwitchProps } from "./types";
import { cn, getTheme, saveTheme, Theme } from "../../utilities";
import { Skeleton } from "../Skeleton";
import { getThemeSwitchClasses, getThemeSwitchIconClasses } from "./constants";

const Switcher = ({ id, icon, swap, value, label, theme, changeTheme, className }: SwitchProps) => {
  const isActive = theme === value;

  return (
    <span
      className={cn("h-full", {
        hidden: swap && isActive,
      })}
    >
      <input
        hidden
        id={id}
        role="checkbox"
        type="checkbox"
        className="theme-controller"
        checked={isActive}
        onChange={() => changeTheme(value)}
      />
      <label htmlFor={id} className={cn(getThemeSwitchIconClasses({ isActive, swap }), className)}>
        <span className="sr-only">{label}</span>
        {icon}
      </label>
    </span>
  );
};

export const ThemeSwitch = ({
  swap = false,
  render,
  className,
  theme: defaultTheme,
}: ThemeSwitchProps) => {
  const [isClient, setIsClient] = useState(false);
  const [theme, setTheme] = useState(() => defaultTheme ?? getTheme());

  useLayoutEffect(() => {
    saveTheme(theme);
  }, [theme]);

  useLayoutEffect(() => {
    setIsClient(true);
    const observer = new MutationObserver(() => {
      const attr = document.body.getAttribute("data-theme");
      if (attr === "dark" || attr === "light") {
        setTheme(attr);
      } else {
        setTheme(null);
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  if (!isClient) {
    return <Skeleton width={swap ? 4 : 16} />;
  }

  if (render) {
    return render({ theme, setTheme });
  }

  const changeTheme = (theme: Theme | null) => {
    setTheme(theme);
  };

  return (
    <fieldset className={cn(getThemeSwitchClasses({ swap }), className)}>
      {!swap && (
        <Switcher
          id="system"
          swap={swap}
          icon={<MonitorIcon className="h-3.5 w-3.5 shrink-0" />}
          label="Switch to system theme"
          value={null}
          theme={theme}
          changeTheme={changeTheme}
        />
      )}
      <Switcher
        id="dark"
        swap={swap}
        icon={<MoonIcon className="h-3.5 w-3.5 shrink-0" />}
        label="Switch to dark theme"
        value="dark"
        theme={theme}
        changeTheme={changeTheme}
      />
      <Switcher
        id="light"
        swap={swap}
        icon={<SunIcon className="h-3.5 w-3.5 shrink-0" />}
        label="Switch to light theme"
        value="light"
        theme={theme}
        changeTheme={changeTheme}
      />
    </fieldset>
  );
};
