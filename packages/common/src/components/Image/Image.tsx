import React, { useState } from "react";
import { cn } from "../../utilities";
import { getImageClasses } from "./constants";
import { type ImageProps } from "./types";

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, fit, radius, src, fallbackSrc, alt, onError, ...props }, ref) => {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (fallbackSrc && imgSrc !== fallbackSrc) {
        setImgSrc(fallbackSrc);
      }
      onError?.(e);
    };

    return (
      <img
        ref={ref}
        src={imgSrc}
        alt={alt}
        className={cn(getImageClasses({ fit, radius }), className)}
        onError={handleError}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";
