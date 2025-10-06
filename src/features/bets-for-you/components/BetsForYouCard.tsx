import { ArrowDown, ArrowUp, Gift, SaveAll } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import type { Bets } from "@/features/bets-for-you/types/betsForYou";
import IndicatorLine from "../../../components/IndicatorLine";
import { formatPercentage } from "@/lib/formatPercentage";
import CirclePercentage from "../../../components/CirclePercentage";
import ButtonsDecision from "../../../components/ButtonsDecision";

export default function BetsForYouCard({ event }: { event: Bets }) {
  return (
    <Card className="flex flex-col gap-4 bg-card border-border/50 p-4">
      <CardHeader className="px-0">
        <IndicatorLine category={event.category} />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md flex-shrink-0">
            <img
              src={event.image_url}
              alt={`Image of ${event.category}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <CardTitle className="text-base font-semibold line-clamp-2">
            {event.title}
          </CardTitle>
          {event.probability && (
            <div className="relative w-8 h-8 flex-shrink-0">
              <CirclePercentage probability={event.probability} />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold">
                {formatPercentage(event.probability)}
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-0 space-y-2 flex-grow">
        {event.options ? (
          event.options.map((option) => {
            return (
              <div
                key={option.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  {option.high_odds !== undefined &&
                  option.high_odds === true ? (
                    <ArrowUp size={14} className="mr-2" />
                  ) : option.high_odds === false ? (
                    <ArrowDown size={14} className="mr-2" />
                  ) : null}
                  <span className="text-sm">{option.value}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-black">
                    {formatPercentage(option.probability)}
                  </span>
                  <ButtonsDecision
                    positiveClassName="bg-positive text-positive-foreground"
                    negativeClassName="bg-negative text-negative-foreground"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              className="flex-1 rounded-sm bg-positive text-positive-foreground"
            >
              Yes
            </Button>
            <Button
              size="sm"
              className="flex-1 rounded-sm bg-negative text-negative-foreground"
            >
              No
            </Button>
          </div>
        )}
      </CardContent>

      <CardFooter className="px-0 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{event.volume}</span>
        <div className="flex gap-2 items-center">
          <button className="text-muted-foreground">
            <Gift className="h-4 w-4" />
          </button>
          <button className="text-muted-foreground">
            <SaveAll className="h-4 w-4" />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
