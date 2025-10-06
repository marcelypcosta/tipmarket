import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCategory } from "@/features/categorys";
import type { Category } from "@/features/categorys";

const filtersByCategory: Record<Category, string[]> = {
  Todos: ["Todos"],
  Esportes: [
    "Todos",
    "Futebol",
    "Basquete",
    "Vôlei",
    "Tênis de Mesa",
    "Handebol",
  ],
  Crypto: ["Todos", "Bitcoin", "Altcoins", "DeFi", "NFT"],
  Política: ["Todos", "Brasil", "EUA", "Eleições", "Congresso"],
  Mentions: ["Todos", "Twitter", "YouTube", "Reddit"],
  Cultura: ["Todos", "Cinema", "Música", "Games", "Séries"],
};

const mapCategoryToColor = (cat: Category) => {
  switch (cat) {
    case "Esportes":
      return "var(--esportes)";
    case "Crypto":
      return "var(--crypto)";
    case "Política":
      return "var(--política)";
    case "Mentions":
      return "var(--mentions)";
    case "Cultura":
      return "var(--cultura)";
    default:
      return "var(--foreground)";
  }
};

export default function FilterCategories({
  activeFilter: controlledActiveFilter,
  onChange,
}: {
  activeFilter?: string;
  onChange?: (filter: string) => void;
}) {
  const { category } = useCategory();
  const [internalFilter, setInternalFilter] = useState<string>("Todos");
  const isControlled =
    controlledActiveFilter !== undefined && onChange !== undefined;
  const activeFilter = isControlled ? controlledActiveFilter! : internalFilter;

  const filters = useMemo(
    () => filtersByCategory[category as Category] ?? ["Todos"],
    [category]
  );
  const categoryColor = useMemo(() => mapCategoryToColor(category), [category]);

  if (!filters.includes(activeFilter)) {
    if (activeFilter !== "Todos") {
      if (isControlled) {
        onChange && onChange("Todos");
      } else {
        setInternalFilter("Todos");
      }
    }
  }

  return (
    <div
      className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide px-5"
      role="group"
      aria-label="Filtrar por categoria"
    >
      {filters.map((filter) => (
        <Button
          key={filter}
          className={`h-6 px-5 rounded-sm p-2 ${
            activeFilter === filter
              ? "bg-white"
              : "bg-transparent text-white hover:bg-white/10"
          }`}
          style={activeFilter === filter ? { color: categoryColor } : undefined}
          onClick={() => {
            if (isControlled) {
              onChange!(filter);
            } else {
              setInternalFilter(filter);
            }
          }}
          aria-pressed={activeFilter === filter}
          type="button"
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
