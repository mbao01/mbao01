"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type { CarouselApi, CarouselProps } from "./types";
import { cn } from "../../utilities";
import { Button } from "../Button";
import { CarouselContext } from "./CarouselContext";
import {
  getCarouselContentClasses,
  getCarouselItemClasses,
  getCarouselNextClasses,
  getCarouselPreviousClasses,
} from "./constants";
import { useCarousel } from "./useCarousel";

const Carousel = ({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: CarouselProps & React.HTMLAttributes<HTMLDivElement>) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};
Carousel.displayName = "Carousel";

const CarouselContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(getCarouselContentClasses({ orientation }), className)}
          {...props}
        />
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(getCarouselItemClasses({ orientation }), className)}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "ghost", outline = true, ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        outline={outline}
        variant={variant}
        className={cn(getCarouselPreviousClasses({ orientation }), className)}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeftIcon className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, outline = true, variant = "ghost", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        outline={outline}
        variant={variant}
        className={cn(getCarouselNextClasses({ orientation }), className)}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRightIcon className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

Carousel.Content = CarouselContent;
Carousel.Item = CarouselItem;
Carousel.Next = CarouselNext;
Carousel.Previous = CarouselPrevious;

export { Carousel };
