import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownFilterProps {
  label: string;
  items: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function DropdownFilter({ label, items, value, onChange }: DropdownFilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-muted rounded-full px-2 py-1.5 flex items-center gap-2" aria-label={`Abrir opções de ${label}`}>
        <span className="text-muted-foreground">{label}:</span>
        <span className="font-medium">{value}</span>
        <ChevronDown size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-muted rounded-md p-2">
        {items.map((item) => (
          <DropdownMenuItem
            key={item}
            className={`px-4 py-2 hover:bg-muted-foreground hover:text-white ${item === value ? "font-semibold" : ""}`}
            onClick={() => onChange(item)}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
