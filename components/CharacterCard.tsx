import Link from "next/link";
import type { Character } from "@/lib/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";

type CharacterCardProps = {
  character: Character;
  compact?: boolean;
};

const characterMoods: Record<string, "warm" | "forest" | "dawn" | "dusk"> = {
  arden: "dawn",
  roscoe: "forest",
  zephyr: "warm",
  kael: "dusk"
};

export function CharacterCard({ character, compact = false }: CharacterCardProps) {
  const mood = characterMoods[character.slug] ?? "warm";

  return (
    <Link
      href={`/team/${character.slug}`}
      className="group block focus:outline-none focus:ring-2 focus:ring-gold"
    >
      <div className="img-zoom">
        <PlaceholderImage
          label={`${character.name} - ${character.animal}`}
          aspect={compact ? "square" : "portrait"}
          mood={mood}
        />
      </div>
      <div className="pt-4">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">
          {character.virtue}
        </p>
        <h3 className="mt-1.5 font-serif text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-gold md:text-[1.45rem]">
          {character.name}
        </h3>
        <p className="mt-0.5 text-sm text-ink/35">
          {character.epithet}
        </p>
        {!compact ? (
          <p className="mt-2.5 text-sm leading-6 text-ink/40">{character.summary}</p>
        ) : null}
      </div>
    </Link>
  );
}
