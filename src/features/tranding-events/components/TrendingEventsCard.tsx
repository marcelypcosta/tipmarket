import { toast } from "sonner";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SaveIcon } from "@/components/icons/SaveIcon";
import ButtonsDecision from "@/components/ButtonsDecision";

import { formatPercentage } from "@/lib/formatPercentage";
import type { Category } from "@/features/categorys";

export interface BettingOption {
  id: number | string;
  name: string;
  probability: number;
}

export interface Event {
  id: number | string;
  image_icon_url?: string;
  title: string;
  category: Category;
  imageSrc?: string;
  imageAlt?: string;
  bettings_options?: BettingOption[];
  allowSave?: boolean;
  showDecisionButtons?: boolean; 
}

export interface EventCardProps {
  event: Event;
  allowSave?: boolean;
}

export default function TrendingEventsCard({ event, allowSave }: EventCardProps) {
  const {
    bettings_options = [],
    showDecisionButtons = true,
  } = event;

  const hasOptions = bettings_options.length > 0;
  const allowSaveEffective = (allowSave ?? event.allowSave ?? true);

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
        return "var(--card)";
    }
  };


  const CardBackground = ({ imageSrc }: { imageSrc: string }) => (
    <div
      className="absolute inset-0 rounded-lg"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );

  const EventIcon = ({ iconUrl }: { iconUrl?: string }) =>
    iconUrl ? (
      <div className="flex items-center gap-3 py-2 mr-4">
        <div className="w-8 h-8 rounded-md flex-shrink-0">
          <img
            src={iconUrl}
            alt="Event icon"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    ) : null;

  const EventHeader = ({ compact = false }: { compact?: boolean }) => (
    <CardHeader className="p-0 flex-row justify-between gap-4 items-start">
      <CardTitle className={`${compact ? "text-base font-medium" : "text-lg font-bold"} line-clamp-2`}>
        {event.title}
      </CardTitle>
      {allowSaveEffective && (
        <CardAction>
          <button
            onClick={() => toast.success("Aposta salva com sucesso!")}
            aria-label="Salvar aposta"
          >
            <SaveIcon color="white" />
          </button>
        </CardAction>
      )}
    </CardHeader>
  );

  const CardWithOptions = () => (
    <Card
      className="flex justify-center relative text-white h-full border-none overflow-hidden p-4"
      style={
        !event.imageSrc
          ? { backgroundColor: mapCategoryToColor(event.category) }
          : undefined
      }
    >
      {event.imageSrc && (
        <>
          <CardBackground imageSrc={event.imageSrc} />
          <div className="absolute inset-0 bg-black/60 rounded-lg" />
        </>
      )}
      <div className="relative z-10 space-y-2 flex items-start w-full">
        <EventIcon iconUrl={event.image_icon_url} />
        <div className="flex-1">
          <EventHeader />
          <CardContent className="p-0 space-y-1.5 mt-2">
            {event.bettings_options!.map((outcome, index) => (
              <div
                key={index}
                className={`flex items-center justify-between ${
                  index < event.bettings_options!.length - 1
                    ? "pb-2 border-b border-muted-foreground/50"
                    : ""
                }`}
              >
                <p className="font-medium text-sm">{outcome.name}</p>
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-semibold text-white">
                    {formatPercentage(outcome.probability)}
                  </p>
                  {showDecisionButtons && (
                    <ButtonsDecision
                      positiveClassName="bg-positive text-positive-foreground"
                      negativeClassName="bg-negative text-negative-foreground"
                    />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </div>
      </div>
    </Card>
  );

  const CardWithoutOptions = () => (
    <Card
      className="flex justify-center h-full relative text-white border-none overflow-hidden p-4"
      style={
        !event.imageSrc
          ? { backgroundColor: mapCategoryToColor(event.category) }
          : undefined
      }
    >
      {event.imageSrc && (
        <>
          <CardBackground imageSrc={event.imageSrc} />
          <div className="absolute inset-0 bg-black/60 rounded-lg" />
        </>
      )}
      <div className="relative z-10 space-y-2 flex items-start w-full">
        <EventIcon iconUrl={event.image_icon_url} />
        <div className="flex-1">
          <EventHeader compact />
          <CardContent className="p-0 space-y-1.5 mt-2">
            {/* Condicional para mostrar os botões */}
            {showDecisionButtons && <ButtonsDecision />}
          </CardContent>
        </div>
      </div>
    </Card>
  );

  return hasOptions ? <CardWithOptions /> : <CardWithoutOptions />;
}

