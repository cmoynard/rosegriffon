"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

type HomeProps = {};

export default function Home({}: HomeProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        className="h-1/3"
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="p-1 h-full">
                <Card className="h-full">
                  <CardContent className="flex items-center justify-center p-6 h-full">
                    <span className="text-4xl font-semibold">
                      CACA N°{index + 1}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious>
          <span className="text-xl">{"<"}</span>
        </CarouselPrevious>
        <CarouselNext>
          <span className="text-xl">{">"}</span>
        </CarouselNext>
      </Carousel>
      <div className="flex justify-center gap-2 py-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-3 w-3 rounded-full bg-muted",
              index === current - 1
                ? "bg-primary"
                : "bg-muted hover:cursor-pointer"
            )}
            onClick={() => {
              api?.scrollTo(index);
            }}
          />
        ))}
      </div>
    </>
  );
}
