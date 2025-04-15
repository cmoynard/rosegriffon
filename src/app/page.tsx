import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <Carousel
      className="h-full"
      opts={{
        loop: true,
        duration: 3000,
      }}
    >
      <CarouselContent className="h-full">
        <CarouselItem className="h-full">
          <div className="p-1 h-full">
            <Card className="h-full">
              <CardContent className="flex  items-center justify-center p-6 h-full">
                <span className="text-4xl font-semibold">CACA</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
