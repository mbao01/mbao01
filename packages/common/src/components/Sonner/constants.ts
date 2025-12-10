import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getToastClasses = cva("sonner group", {
  variants: createVariants({
    variant: {
      accent: "bg-accent text-accent-content border-accent",
      default: "bg-default text-default-content border-default",
      error: "bg-error text-error-content border-error",
      ghost: "bg-ghost text-ghost-content border-transparent",
      info: "bg-info text-info-content border-info",
      neutral: "bg-neutral text-neutral-content border-neutral",
      primary: "bg-primary text-primary-content border-primary",
      secondary: "bg-secondary text-secondary-content border-secondary",
      success: "bg-success text-success-content border-success",
      warning: "bg-warning text-warning-content border-warning",
    },
    outline: {
      true: "border bg-default",
    },
  }),
  compoundVariants: [
    { outline: true, variant: "accent", className: "text-accent" },
    { outline: true, variant: "default", className: "text-default" },
    { outline: true, variant: "error", className: "text-error" },
    { outline: true, variant: "ghost", className: "text-ghost" },
    { outline: true, variant: "info", className: "text-info" },
    { outline: true, variant: "neutral", className: "text-neutral" },
    { outline: true, variant: "primary", className: "text-primary" },
    { outline: true, variant: "secondary", className: "text-secondary" },
    { outline: true, variant: "success", className: "text-success" },
    { outline: true, variant: "warning", className: "text-warning" },
  ],
  defaultVariants: {
    variant: "default",
  },
});

export const getToastButtonClasses = cva("", {
  variants: createVariants({
    variant: {
      default: "group-[.sonner]:bg-base-300! group-[.sonner]:text-base-content!",
      accent: "group-[.sonner]:bg-accent! group-[.sonner]:text-accent-content!",
      error: "group-[.sonner]:bg-error! group-[.sonner]:text-error-content!",
      info: "group-[.sonner]:bg-info! group-[.sonner]:text-info-content!",
      neutral: "group-[.sonner]:bg-neutral! group-[.sonner]:text-neutral-content!",
      primary: "group-[.sonner]:bg-primary! group-[.sonner]:text-primary-content!",
      secondary: "group-[.sonner]:bg-secondary! group-[.sonner]:text-secondary-content!",
      success: "group-[.sonner]:bg-success! group-[.sonner]:text-success-content!",
      warning: "group-[.sonner]:bg-warning! group-[.sonner]:text-warning-content!",
    },
    outline: {
      true: "group-[.sonner]:border! group-[.sonner]:border-solid! group-[.sonner]:bg-transparent!",
    },
  }),
  compoundVariants: [
    {
      outline: true,
      variant: "accent",
      className: "group-[.sonner]:border-accent! group-[.sonner]:text-accent!",
    },
    {
      outline: true,
      variant: "error",
      className: "group-[.sonner]:border-error! group-[.sonner]:text-error!",
    },
    {
      outline: true,
      variant: "info",
      className: "group-[.sonner]:text-info!",
    },
    {
      outline: true,
      variant: "neutral",
      className: "group-[.sonner]:border-neutral! group-[.sonner]:text-neutral!",
    },
    {
      outline: true,
      variant: "primary",
      className: "group-[.sonner]:border-primary! group-[.sonner]:text-primary!",
    },
    {
      outline: true,
      variant: "secondary",
      className: "group-[.sonner]:border-secondary! group-[.sonner]:text-secondary!",
    },
    {
      outline: true,
      variant: "success",
      className: "group-[.sonner]:border-success! group-[.sonner]:text-success!",
    },
    {
      outline: true,
      variant: "warning",
      className: "group-[.sonner]:border-warning! group-[.sonner]:text-warning!",
    },
  ],
});
