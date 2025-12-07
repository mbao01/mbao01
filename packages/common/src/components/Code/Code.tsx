import React from "react";
import { cn } from "../../utilities";
import { getCodeClasses } from "./constants";
import { getDataPrefix } from "./helper";
import { type CodeProps } from "./types";

const CodeBlock = ({ children, prefix, skip }: Pick<CodeProps, "children" | "prefix" | "skip">) => {
  let customIndex = 0;

  return React.Children.map(children, (child, index) => {
    const props = (React.isValidElement(child) ? child.props : {}) as Partial<{
      "data-prefix": string;
      className: string;
    }>;
    const dataPrefix = getDataPrefix(prefix, skip ? customIndex : index);

    if (skip) {
      customIndex = props["data-prefix"] ? customIndex : customIndex + 1;
    }

    return (
      <pre key={index} data-prefix={props["data-prefix"] ?? dataPrefix} className={props.className}>
        <code>{child}</code>
      </pre>
    );
  });
};

export const Code = React.forwardRef<HTMLDivElement, CodeProps>(
  ({ className, inline, prefix, skip, colorScheme, children, ...props }, ref) => {
    const Component = inline ? "code" : "div";

    return (
      <Component
        ref={ref}
        className={cn(getCodeClasses({ inline, colorScheme }), className)}
        {...props}
      >
        {inline ? (
          children
        ) : (
          <CodeBlock prefix={prefix} skip={skip}>
            {children}
          </CodeBlock>
        )}
      </Component>
    );
  }
);

Code.displayName = "Code";
