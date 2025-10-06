import type { Bets } from "@/features/bets-for-you/types/betsForYou";
import BetsForYouCard from "./BetsForYouCard";
import { useCategory } from "@/features/categorys";

export const betsForYouData: Bets[] = [
  {
    id: 101,
    category: "Crypto",
    image_url: "/images/bitcoin-icon.svg",
    title: "What price will Bitcoin hit in August?",
    volume: "$163K",
    options: [
      {
        id: "opt_1",
        value: "135K",
        probability: 0.18,
        high_odds: true,
      },
      {
        id: "opt_2",
        value: "125K",
        probability: 0.12,
        high_odds: true,
      },
      {
        id: "opt_3",
        value: "115K",
        probability: 0.11,
        high_odds: true,
      },
    ],
  },
  {
    id: 205,
    category: "Política",
    image_url: "/images/israel_vs_hamas.jpeg",
    title: "Israel x Hamas ceasefire by September 30?",
    probability: 0.3,
    volume: "$163k",
  },
  {
    id: 310,
    category: "Mentions",
    image_url: "/images/elon_musk.jpeg",
    title: "Elon Musk # tweets September 12 - September 19, 2025?",
    volume: "$163k",
    options: [
      {
        id: "opt_1",
        value: "160-179",
        probability: 0.01,
      },
      {
        id: "opt_2",
        value: "180-199",
        probability: 0.09,
      },
    ],
  },
];

export default function BetsForYou() {
  const { category } = useCategory();

  const filteredBetsForYou =
    category === "Todos"
      ? betsForYouData
      : betsForYouData.filter((e) => e.category === category);

  if (filteredBetsForYou.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        Nenhuma sugestão de apostas para você.
      </p>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {filteredBetsForYou.map((event) => (
        <BetsForYouCard key={event.id} event={event} />
      ))}
    </div>
  );
}
