import { Button } from "@/components/ui/button";
import { useCategory } from "@/features/categorys";
import type { Category } from "../types/category";

const categories: { label: Category; value: string }[] = [
  { label: "Esportes", value: "esportes" },
  { label: "Crypto", value: "crypto" },
  { label: "Política", value: "política" },
  { label: "Mentions", value: "mentions" },
  { label: "Cultura", value: "cultura" },
];

export default function CategoryTabs() {
  const { category, setCategory } = useCategory();

  return (
    <div
      className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide px-5"
      role="group"
      aria-label="Filtrar por categoria"
    >
      {categories.map(({ label, value }) => (
        <Button
          key={value}
          className={`p-2 rounded-t-md  transition-colors ${
            category === label
              ? "text-white rounded-b-none"
              : "bg-muted text-muted-foreground hover:bg-white/10"
          }`}
          style={
            category === label
              ? {
                  backgroundColor:
                    label === "Esportes"
                      ? "var(--esportes)"
                      : label === "Crypto"
                      ? "var(--crypto)"
                      : label === "Política"
                      ? "var(--política)"
                      : label === "Mentions"
                      ? "var(--mentions)"
                      : label === "Cultura"
                      ? "var(--cultura)"
                      : undefined,
                }
              : undefined
          }
          onClick={() => {
            const isTouchDevice =
              typeof window !== "undefined" &&
              ("ontouchstart" in window || navigator.maxTouchPoints > 0);
            if (isTouchDevice) {
              setCategory(category === label ? "Todos" : label);
            } else {
              setCategory(label);
            }
          }}
          onDoubleClick={() => {
            if (category === label) {
              setCategory("Todos");
            }
          }}
          aria-pressed={category === label}
          type="button"
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
