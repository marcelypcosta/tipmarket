export default function CategoryTitle({
  category,
  filter,
}: {
  category: string;
  filter: string;
}) {
  return (
    <div className="text-lg font-semibold text-foreground">
      <h2>{category} Market</h2>
      <span className="text-sm font-medium text-foreground/50">
        {category} {">"} {filter}
      </span>
    </div>
  );
}
