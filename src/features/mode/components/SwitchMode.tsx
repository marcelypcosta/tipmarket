import { useEffect } from "react";
import { toast } from "sonner";
import type { Mode } from "@/features/mode/types/mode";

interface SwitchModeProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export default function SwitchMode({ mode, setMode }: SwitchModeProps) {
  useEffect(() => {
    if (mode === "real") {
      toast.success("Modo Real ativado");
    } else if (mode === "play-money") {
      toast.success("Modo Play Money ativado");
    }
  }, [mode]);

  return (
    <div
      className="relative flex items-center bg-muted rounded-sm p-1"
      role="group"
      aria-label="Alternar modo de operação"
    >
      <button
        className={`relative z-10 p-1.5 rounded-sm text-xs font-medium transition-colors ${
          mode === "real"
            ? "bg-positive text-positive-foreground"
            : "text-muted-foreground"
        }`}
        onClick={() => setMode("real")}
        aria-pressed={mode === "real"}
        aria-label="Modo real"
        type="button"
      >
        Real
      </button>
      <button
        className={`relative z-10 p-1.5 rounded-sm text-xs font-medium transition-colors ${
          mode === "play-money"
            ? "bg-positive text-positive-foreground"
            : "text-muted-foreground"
        }`}
        onClick={() => setMode("play-money")}
        aria-pressed={mode === "play-money"}
        aria-label="Modo Play Money"
        type="button"
      >
        Play Money
      </button>
    </div>
  );
}
