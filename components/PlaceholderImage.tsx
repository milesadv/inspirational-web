type PlaceholderImageProps = {
  label: string;
  aspect?: "wide" | "portrait" | "square" | "book";
  className?: string;
};

const aspectClasses = {
  wide: "aspect-[16/9]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  book: "aspect-[4/5]"
};

export function PlaceholderImage({ label, aspect = "wide", className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`${aspectClasses[aspect]} overflow-hidden rounded-md border border-gold/25 bg-[radial-gradient(circle_at_30%_25%,rgba(201,214,218,0.9),transparent_34%),linear-gradient(135deg,#f6f1e7,#e7dcc8)] ${className}`}
      role="img"
      aria-label={`${label} placeholder`}
    >
      <div className="flex h-full items-center justify-center p-6 text-center font-serif text-2xl font-semibold text-forest">
        {label}
      </div>
    </div>
  );
}
