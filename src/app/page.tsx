"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

type HomeProps = {};

export default function Home({}: HomeProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      className="h-full"
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
                <CardContent className="flex  items-center justify-center p-6 h-full">
                  <span className="text-4xl font-semibold">
                    CACA N°{index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
