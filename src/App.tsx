import "@/App.css";

import { useMemo, useState, type ReactNode } from "react";

import { Radio, Settings2, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { SaveIcon } from "@/components/icons/SaveIcon";
import CategoryTitle from "@/components/CategoryHeader";

import SearchBar from "@/features/search/components/Search";
import LiveGames from "@/features/live-games/components/LiveGames";
import BetsForYou from "@/features/bets-for-you/components/BetsForYou";

import { CategoryTabs, useCategory, type Category } from "@/features/categorys";
import { FilterCategories, DropdownFilter } from "@/features/filters";
import { TrendingEvents } from "@/features/tranding-events";

const ThemedBackground = ({
  category,
  children,
}: {
  category: Category;
  children: ReactNode;
}) => {
  const backgroundColor = useMemo(() => {
    switch (category) {
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
        return "var(--background)";
    }
  }, [category]);

  return (
    <div className="flex-grow" style={{ backgroundColor }}>
      {children}
    </div>
  );
};

function App() {
  const { category } = useCategory();

  const [sort, setSort] = useState("24h Volume");
  const [frequency, setFrequency] = useState("All");
  const [status, setStatus] = useState("Active");
  const [selectedFilter, setSelectedFilter] = useState<string>("Todos");

  return (
    <div className="flex flex-col min-h-screen pb-10">
      <main className="pt-2">
        {/* Categories (global) */}
        <CategoryTabs />

        <ThemedBackground category={category}>
          <div className="space-y-4 py-4 mb-4">
            {/* Filtragem de Categorias */}
            {category !== "Todos" && (
              <FilterCategories
                activeFilter={selectedFilter}
                onChange={setSelectedFilter}
              />
            )}

            {/* Formulário de Busca */}
            <section className="flex items-center gap-2 px-5">
              <SearchBar />
              <Button
                className="bg-muted text-foreground"
                aria-label="Abrir configurações de busca"
                type="button"
              >
                <Settings2 />
              </Button>
              <Button
                
                className="bg-white border text-foreground"
                aria-label="Salvar filtros"
                type="button"
              >
                <SaveIcon />
              </Button>
            </section>

            {/* Filtros de ordenação */}
            {category === "Todos" && (
              <section className="px-5">
                <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 text-sm">
                  <DropdownFilter
                    label="Sort by"
                    items={["24h Volume", "Price", "Market Cap"]}
                    value={sort}
                    onChange={setSort}
                  />
                  <DropdownFilter
                    label="Frequency"
                    items={["All", "Daily", "Weekly", "Monthly"]}
                    value={frequency}
                    onChange={setFrequency}
                  />
                  <DropdownFilter
                    label="Status"
                    items={["Active", "Closed", "Upcoming"]}
                    value={status}
                    onChange={setStatus}
                  />
                </div>
              </section>
            )}
          </div>
        </ThemedBackground>
        <div className="px-5 space-y-4">
          {/* Título da Categoria */}
          {category !== "Todos" && (
            <CategoryTitle category={category} filter={selectedFilter} />
          )}

          {/* Eventos em Alta */}
          <section>
            <SectionTitle icon={<TrendingUp />} title="Eventos em alta" />
            <div className="-mx-5">
              <TrendingEvents />
            </div>
          </section>

          {/* Jogos ao Vivo */}
          {(category === "Todos" || category === "Esportes") && (
            <section>
              <SectionTitle
                icon={<Radio size={20} className="text-red-600" />}
                title="Jogos ao vivo"
              />
              <div className="-mx-5">
                <LiveGames />
              </div>
            </section>
          )}

          {/* Apostas para você */}
          <section>
            <SectionTitle
              icon={<TrendingUp className="text-green-600" />}
              title="Apostas para você"
            />
            <BetsForYou />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
