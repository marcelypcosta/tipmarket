export default function IndicatorLine({ category }: { category: string }) {
  const backgroundColor = (() => {
    const key = category?.toLowerCase();
    switch (key) {
      case "esportes":
        return "var(--esportes)";
      case "crypto":
        return "var(--crypto)";
      case "política":
        return "var(--política)";
      case "mentions":
        return "var(--mentions)";
      case "cultura":
        return "var(--cultura)";
      default:
        return "var(--border)";
    }
  })();

  return <div className="w-20 h-1 rounded-full" style={{ backgroundColor }} />;
}
