import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ShinyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};
