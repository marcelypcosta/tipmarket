import Carousel from "@/components/Carousel";
import type { Event } from "./TrendingEventsCard";
import TrendingEventsCard from "./TrendingEventsCard";
import { useCategory } from "@/features/categorys";
import { CarouselItem } from "@/components/ui/carousel";

const allEvents: Event[] = [
  {
    id: 1,
    title: "2025 Valorant Champions Winner",
    category: "Esportes",
    imageSrc: "/images/valorant_champions_paris.jpg",
    bettings_options: [
      { id: 1, name: "G2", probability: 0.18 },
      { id: 2, name: "Paper Rex", probability: 0.14 },
      { id: 3, name: "Mibr", probability: 0.12 },
    ],
    
  },
  {
    id: 2,
    title: "Vencedor Champions League 2025",
    category: "Esportes",
    imageSrc: "/images/champions_league.jpg",
    bettings_options: [
      { id: 1, name: "Real Madrid", probability: 0.85 },
      { id: 2, name: "Manchester United", probability: 0.15 },
      { id: 3, name: "Manchester City", probability: 0.05 },
    ],
  },
  {
    id: 3,
    title: "O Corinthians vai ganhar no mirassol?",
    category: "Esportes",
    imageSrc: "/images/corinthians_vs_mirassol.avif",
    bettings_options: [],
    showDecisionButtons: true,
  },
  {
    id: 4,
    title: "O preço do bitcoins vai cair em agosto?",
    category: "Crypto",
    image_icon_url: "/images/bitcoin-icon.svg",
    bettings_options: [],
    showDecisionButtons: true,
  },
];

export default function TrendingEvents() {
  const { category } = useCategory();

  const filteredEvents =
    category === "Todos"
      ? allEvents
      : allEvents.filter((event) => event.category === category);

  const largeEvents = filteredEvents.filter(
    (event) => event.bettings_options && event.bettings_options.length >= 2
  );
  const smallEvents = filteredEvents.filter(
    (event) => !event.bettings_options || event.bettings_options.length < 2
  );

  if (filteredEvents.length === 0 && category !== "Todos") {
    return (
      <p className="px-5 text-sm text-muted-foreground">
        Nenhum evento em alta.
      </p>
    );
  }

  return (
    <div className="flex flex-col space-y-3">
      {largeEvents.length > 0 && (
        <Carousel>
          {largeEvents.map((event, idx) => (
            <CarouselItem
              key={event.id}
              className={`h-full ${
                largeEvents.length === 1
                  ? "basis-full"
                  : "basis-[90%] md:basis-1/2"
              } ${idx === 0 ? "pl-10" : "pl-3"} ${
                idx === largeEvents.length - 1 ? "pr-5" : ""
              }`}
            >
              <div className="h-full">
                <TrendingEventsCard event={event} />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      )}

      {smallEvents.length > 0 && (
        <Carousel>
          {smallEvents.map((event, idx) => (
            <CarouselItem
              key={event.id}
              className={`h-full ${
                smallEvents.length === 1
                  ? "basis-full"
                  : "basis-[80%] md:basis-1/2"
              } ${idx === 0 ? "pl-10" : "pl-3"} ${
                idx === smallEvents.length - 1 ? "pr-5" : ""
              }`}
            >
              <div className="h-full">
                <TrendingEventsCard event={event} allowSave={false} />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      )}
    </div>
  );
}
