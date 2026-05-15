type PlaceholderImageProps = {
  label: string;
  aspect?: "wide" | "portrait" | "square" | "book" | "hero";
  className?: string;
  mood?: "warm" | "forest" | "dawn" | "dusk" | "mist";
};

const aspectClasses = {
  wide: "aspect-[16/9]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  book: "aspect-[4/5]",
  hero: "aspect-[21/9]"
};

const moodStyles: Record<string, { bg: string; labelColor: string }> = {
  warm: {
    bg: "linear-gradient(160deg, #f0e8d8 0%, #e3d5bc 50%, #d8c9a8 100%)",
    labelColor: "text-forest/25"
  },
  forest: {
    bg: "linear-gradient(160deg, #3a5245 0%, #2e4034 50%, #243a2d 100%)",
    labelColor: "text-parchment/20"
  },
  dawn: {
    bg: "linear-gradient(170deg, #f6f1e7 0%, #ede0c8 50%, #e4d4b0 100%)",
    labelColor: "text-forest/20"
  },
  dusk: {
    bg: "linear-gradient(160deg, #e0d4be 0%, #d0c3a5 50%, #c4b697 100%)",
    labelColor: "text-forest/20"
  },
  mist: {
    bg: "linear-gradient(180deg, #dfe8eb 0%, #c9d6da 50%, #b8c8ce 100%)",
    labelColor: "text-forest/20"
  }
};

export function PlaceholderImage({
  label,
  aspect = "wide",
  className = "",
  mood = "warm"
}: PlaceholderImageProps) {
  const m = moodStyles[mood];

  return (
    <div
      className={`${aspectClasses[aspect]} relative overflow-hidden ${className}`}
      role="img"
      aria-label={`${label} placeholder`}
      style={{ background: m.bg }}
    >
      <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
        <span className={`font-serif text-lg font-semibold tracking-wide ${m.labelColor}`}>
          {label}
        </span>
      </div>
    </div>
  );
}
