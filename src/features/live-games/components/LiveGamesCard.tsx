// LiveGamesCard.tsx
import { Radio } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardHeader, CardContent } from "../../../components/ui/card";
import { Progress } from "../../../components/ui/progress";
import { formatPercentage } from "@/lib/formatPercentage";

interface Team {
  id: string;
  name: string;
  nickname: string;
  probability: number;
}

interface Event {
  id: string;
  imagePlay: string;
  homeTeam: Team;
  awayTeam: Team;
}

export default function LiveGamesCard({ event }: { event: Event }) {
  return (
    <Card className="relative text-white border-none overflow-hidden rounded-xl">
      <Badge className="absolute top-2 left-2 z-20 flex items-center gap-1 bg-negative text-negative-foreground animate-pulse">
        Ao Vivo <Radio size={14} />
      </Badge>

      {/* Imagem de fundo */}
      <img
        src={event.imagePlay}
        alt={`${event.homeTeam.nickname} vs ${event.awayTeam.nickname}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 rounded-lg" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4">
        {/* Título */}
        <CardHeader className="p-0 text-center">
          <h2 className="text-lg font-bold">
            {event.homeTeam.nickname} VS {event.awayTeam.nickname}
          </h2>
        </CardHeader>

        {/* Times e botões */}
        <CardContent className="p-0 space-y-3">
          {/* Home Team */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-white" />
                <span className="text-sm font-medium">
                  {event.homeTeam.nickname}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Progress
                  value={event.homeTeam.probability}
                  className="h-0.5 rounded-full bg-white"
                  style={{ width: `${event.homeTeam.probability * 100}px` }}
                />
                <span className="text-sm font-medium">
                  {formatPercentage(event.homeTeam.probability)}
                </span>
              </div>
            </div>
            <Button
              size="sm"
              className="w-20 h-5 px-5 rounded-sm text-xs bg-white text-black"
            >
              {event.homeTeam.nickname}
            </Button>
          </div>

          {/* Away Team */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-white" />
                <span className="text-sm font-medium">
                  {event.awayTeam.nickname}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Progress
                  value={event.awayTeam.probability}
                  className="h-0.5 rounded-full bg-positive"
                  style={{ width: `${event.awayTeam.probability * 100}px` }}
                />
                <span className="text-sm font-medium">
                  {formatPercentage(event.awayTeam.probability)}
                </span>
              </div>
            </div>
            <Button
              size="sm"
              className="w-20 h-5 px-5 rounded-sm text-xs bg-white text-black"
            >
              {event.awayTeam.nickname}
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
