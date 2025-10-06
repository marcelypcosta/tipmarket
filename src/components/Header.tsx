import { Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SwitchMode from "@/features/mode/components/SwitchMode";
import { useMode } from "@/features/mode/context/ContextMode";

export default function Header() {
  const { mode, setMode } = useMode();

  return (
    <header className="flex justify-between items-center bg-background">
      <h1 className="text-xl font-bold">TipMarket</h1>
      <div className="flex items-center space-x-2">
        {/* Switch (Real/Play) */}
        <SwitchMode mode={mode} setMode={setMode} />
        {/* Button Wallet */}
        <Button
          className="w-8 h-8 bg-muted text-foreground"
          aria-label="Abrir carteira"
          type="button"
        >
          <Wallet />
        </Button>
        {/* Avatar Profile */}
        <Avatar className="w-8 h-8 rounded-md">
          <AvatarImage
            src="https://github.com/marcelypcosta.png"
            alt="Foto de perfil"
          />
          <AvatarFallback className="w-8 h-8 bg-muted text-foreground">
            CN
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
