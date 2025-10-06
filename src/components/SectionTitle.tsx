import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
}

export default function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="flex items-center gap-2 font-semibold text-sm">
        {icon} {title}
      </h3>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  );
}
