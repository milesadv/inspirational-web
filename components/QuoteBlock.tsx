type QuoteBlockProps = {
  quote: string;
  cite?: string;
};

export function QuoteBlock({ quote, cite }: QuoteBlockProps) {
  return (
    <figure className="border-l-4 border-gold bg-white/35 px-6 py-5">
      <blockquote className="font-serif text-2xl italic leading-snug text-forest md:text-3xl">
        <span className="text-gold">“</span>
        {quote}
        <span className="text-gold">”</span>
      </blockquote>
      {cite ? <figcaption className="mt-3 text-sm font-medium text-ink/65">{cite}</figcaption> : null}
    </figure>
  );
}
