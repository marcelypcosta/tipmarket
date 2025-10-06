import { formatPercentage } from "@/lib/formatPercentage";

export default function CirclePercentage({ probability }: { probability: number }) {
  return (
    <svg className="w-full h-full" viewBox="0 0 36 36">
      <circle
        cx="18"
        cy="18"
        r="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-white/20"
      />
      <circle
        cx="18"
        cy="18"
        r="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray={`${formatPercentage(probability)} 100.48`}
        strokeLinecap="round"
        className="text-current"
        transform="rotate(-90 18 18)"
      />
    </svg>
  );
}
