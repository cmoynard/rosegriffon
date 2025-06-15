"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { CarouselData } from "@/lib/get-carousel-images";

type HomeCarouselProps = {
  data?: CarouselData[];
};

export default function HomeCarousel({ data }: HomeCarouselProps) {
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

  const carouselCards: {
    isImage: boolean;
    imageSrc?: string;
    text?: string;
    blurAmount?: number;
    href?: string;
    newTab?: boolean;
  }[] =
    data?.map((item) => ({
      isImage: true,
      imageSrc: item.url,
      text: item.metadata.title,
      href: item.metadata.href,
      blurAmount: 5,
      newTab: item.metadata.newTab || false,
    })) || [];

  return (
    <>
      <Carousel
        setApi={setApi}
        className="h-80"
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {carouselCards.map((card, index) => (
            <CarouselItem key={index} className="h-full pt-0">
              <div className="h-full w-full">
                {card.href ? (
                  <Link
                    href={card.href}
                    className="block h-full w-full group"
                    target={card.newTab ? "_blank" : "_self"}
                  >
                    <div className="h-full w-full overflow-hidden relative rounded-xl group">
                      {card.isImage && card.imageSrc && (
                        <div className="absolute inset-0 w-full h-full">
                          <Image
                            src={card.imageSrc}
                            alt={
                              card.text + " Rose Griffon" ||
                              `Slide ${index + 1} Rose Griffon`
                            }
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                              filter: `blur(${card.blurAmount || 0}px)`,
                            }}
                            className="w-full h-full group-hover:scale-110 transition-all duration-500 ease-in-out"
                          />
                        </div>
                      )}
                      <div
                        className={cn(
                          "flex items-center justify-center p-0 h-full w-full relative",
                          !card.isImage && "bg-card text-card-foreground"
                        )}
                      >
                        {card.text && (
                          <span
                            className={cn(
                              "text-4xl font-semibold relative z-10 px-4 py-2 rounded",
                              card.isImage &&
                                "text-white bg-black/40 shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                            )}
                          >
                            {card.text}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="h-full w-full overflow-hidden relative rounded-xl group">
                    {card.isImage && card.imageSrc && (
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src={card.imageSrc}
                          alt={
                            card.text + " Rose Griffon" ||
                            `Slide ${index + 1} Rose Griffon`
                          }
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                            filter: `blur(${card.blurAmount || 0}px)`,
                            transition: "transform 0.3s ease-in-out",
                          }}
                          className="w-full h-full group-hover:scale-110"
                        />
                      </div>
                    )}
                    <div
                      className={cn(
                        "flex items-center justify-center p-0 h-full w-full relative",
                        !card.isImage && "bg-card text-card-foreground"
                      )}
                    >
                      {card.text && (
                        <span
                          className={cn(
                            "text-4xl font-semibold relative z-10 px-4 py-2 rounded",
                            card.isImage &&
                              "text-white bg-black/40 shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                          )}
                        >
                          {card.text}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-2">
          <CarouselPrevious>
            <span className="text-xl">{"<"}</span>
          </CarouselPrevious>
          <CarouselNext>
            <span className="text-xl">{">"}</span>
          </CarouselNext>
        </div>
      </Carousel>

      <div className="flex justify-center gap-2 py-4">
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
