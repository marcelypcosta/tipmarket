import type { ReactNode } from "react";
import { Carousel as CarouselComponent, CarouselContent } from "./ui/carousel";

export default function Carousel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CarouselComponent
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent className="-ml-4">
        {children}
      </CarouselContent>
    </CarouselComponent>
  );
}
