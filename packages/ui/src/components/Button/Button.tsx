import c from "clsx";
import { getButtonClasses } from "./constants";
import { type ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const {
    className,
    outline,
    label,
    disabled,
    onClick,
    loading,
    variant,
    size,
    wide,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      onClick={onClick}
      disabled={disabled}
      className={c(
        getButtonClasses({ size, wide, outline, variant, loading }),
        className
      )}
    >
      {label}
      {loading ? (
        <span
          className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[inherit]"
          data-testid="loading"
        >
          <span className="loading loading-spinner" />
        </span>
      ) : null}
    </button>
  );
};
