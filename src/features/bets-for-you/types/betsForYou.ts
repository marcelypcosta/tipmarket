import type { Category } from "@/features/categorys";

export type { Option, Bets };

interface Option {
  id: string;
  value: string;
  high_odds?: boolean;
  probability: number;
}

interface Bets {
  id: number;
  category: Category;
  image_url: string;
  title: string;
  probability?: number;
  volume: string;
  options?: readonly Option[];
}