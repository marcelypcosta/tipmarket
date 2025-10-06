import { Search } from "lucide-react";

export default function SearchBar() {

  return (
    <div className="flex flex-1 items-center gap-2 rounded-md bg-white p-2 border border-border">
      <Search className="text-muted-foreground" size={20} />
      <input
        type="text"
        placeholder="Buscar por..."
        className="border-0 flex-1 placeholder:text-muted-foreground outline-none"
        aria-label="Campo de busca"
      />
    </div>
  );
}
