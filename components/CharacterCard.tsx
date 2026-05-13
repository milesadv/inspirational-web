import Link from "next/link";
import type { Character } from "@/lib/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";

type CharacterCardProps = {
  character: Character;
  compact?: boolean;
};

export function CharacterCard({ character, compact = false }: CharacterCardProps) {
  return (
    <Link
      href={`/team/${character.slug}`}
      className="group block rounded-md border border-gold/20 bg-white/35 p-4 transition hover:-translate-y-1 hover:border-gold hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-gold"
    >
      <PlaceholderImage label={`${character.name} ${character.animal}`} aspect={compact ? "square" : "portrait"} />
      <div className="mt-5">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">{character.virtue}</p>
        <h3 className="mt-2 font-serif text-3xl font-semibold text-ink">{character.name}</h3>
        <p className="mt-1 font-medium text-forest">{character.epithet}</p>
        {!compact ? <p className="mt-3 text-sm leading-6 text-ink/70">{character.summary}</p> : null}
      </div>
    </Link>
  );
}
