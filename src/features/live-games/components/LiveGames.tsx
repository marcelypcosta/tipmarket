import Carousel from "../../../components/Carousel";
import { CarouselItem } from "../../../components/ui/carousel";
import LiveGamesCard from "./LiveGamesCard";

const liveGameData = [
  {
    id: "1",
    imagePlay: "/images/lakers_vs_clippers.jpeg",
    homeTeam: {
      id: "lakers",
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      probability: 0.33,
    },
    awayTeam: {
      id: "clippers",
      name: "Los Angeles Clippers",
      nickname: "Clippers",
      probability: 0.53,
    },
  },
  {
    id: "2",
    imagePlay: "/images/heat_vs_bucks.png",
    homeTeam: {
      id: "heat",
      name: "Miami Heat",
      nickname: "Heat",
      probability: 0.23,
    },
    awayTeam: {
      id: "bucks",
      name: "Milwaukee Bucks",
      nickname: "Bucks",
      probability: 0.73,
    },
  },
];

export default function LiveGames() {
  if (liveGameData.length === 0) {
    return (
      <p className="px-5 text-sm text-muted-foreground">
        Nenhuma partida em andamento.
      </p>
    );
  }
  return (
    <div className="space-y-3">
      <Carousel>
        {liveGameData.map((event, idx) => (
          <CarouselItem
            key={event.id}
            className={`h-full ${
              liveGameData.length === 1
                ? "basis-[100%]"
                : "basis-[90%] md:basis-1/2 lg:basis-1/3"
            } ${idx === 0 ? "pl-10" : "pl-3"} ${
              idx === liveGameData.length - 1 ? "pr-5" : ""
            }`}
          >
            <div className="h-full">
              <LiveGamesCard event={event} />
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}
