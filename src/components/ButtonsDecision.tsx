import { toast } from "sonner";
import { Button } from "./ui/button";

interface ButtonsDecisionProps {
  positiveClassName?: string;
  negativeClassName?: string;
  fullWidth?: boolean;
}

export default function ButtonsDecision({
  positiveClassName,
  negativeClassName,
  fullWidth = false,
}: ButtonsDecisionProps) {
  const yesClasses = positiveClassName ?? "bg-foreground text-background";
  const noClasses = negativeClassName ?? "bg-background text-foreground border";

  return (
    <div className="flex items-center space-x-2">
      <Button
        className={`h-6 px-5 rounded-sm  ${
          fullWidth ? "flex-1" : ""
        } ${yesClasses}`}
        onClick={() => toast.success("Botão 'Yes'!", { description: "Botão está funcional!" })}
      >
        Yes
      </Button>
      <Button
        className={`h-6 px-5 rounded-sm  ${
          fullWidth ? "flex-1" : ""
        } ${noClasses}`}
        onClick={() => toast.error("Botão 'No'!", { description: "Botão está funcional!" })}
      >
        No
      </Button>
    </div>
  );
}
