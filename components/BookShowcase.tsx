"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Product } from "@/lib/site";

const coverGradients = [
  "linear-gradient(160deg, #f0e8d8 0%, #e3d5bc 50%, #d8c9a8 100%)",
  "linear-gradient(160deg, #e0d4be 0%, #d0c3a5 50%, #c4b697 100%)",
  "linear-gradient(170deg, #f6f1e7 0%, #ede0c8 50%, #e4d4b0 100%)",
  "linear-gradient(160deg, #3a5245 0%, #2e4034 50%, #243a2d 100%)",
  "linear-gradient(180deg, #dfe8eb 0%, #c9d6da 50%, #b8c8ce 100%)",
];

const comingSoonGradient =
  "linear-gradient(180deg, #dfe8eb 0%, #c9d6da 50%, #b8c8ce 100%)";

export function BookShowcase({ books }: { books: Product[] }) {
  const [active, setActive] = useState(0);

  return (
    <div
      className="flex w-full items-stretch gap-1.5 md:gap-2"
      style={{ height: "clamp(22rem, 38vw, 30rem)" }}
    >
      {books.map((book, i) => {
        const isActive = active === i;
        const isComingSoon = book.status === "Coming Soon";
        const bg = isComingSoon
          ? comingSoonGradient
          : coverGradients[i % coverGradients.length];
        const isDarkCover = !isComingSoon && i % coverGradients.length === 3;
        const shortTitle = book.title
          .replace("Inspirationally Propelled: ", "")
          .replace("The ", "");

        return (
          <motion.div
            key={book.title}
            className="relative cursor-pointer overflow-hidden"
            animate={{ flex: isActive ? 5 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActive(i)}
            onHoverStart={() => setActive(i)}
            style={{ background: bg, minWidth: 0 }}
          >
            {/* Centre placeholder label (expanded only) */}
            {isActive && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                  className={`font-serif text-lg font-semibold tracking-wide ${
                    isDarkCover ? "text-parchment/12" : "text-forest/12"
                  }`}
                >
                  {book.imageLabel}
                </span>
              </div>
            )}

            {/* Expanded: details at bottom */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-6"
                  style={{
                    background: isDarkCover
                      ? "linear-gradient(to top, rgba(26,26,26,0.65) 0%, transparent 50%)"
                      : "linear-gradient(to top, rgba(26,26,26,0.4) 0%, transparent 50%)",
                  }}
                >
                  {isComingSoon && (
                    <span className="mb-2 w-fit bg-forest/80 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-parchment">
                      Coming Soon
                    </span>
                  )}
                  <h3 className="font-serif text-lg font-semibold leading-snug text-parchment md:text-xl">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm text-parchment/50">
                    {book.price ?? "Join the list for updates"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Collapsed: vertical spine label */}
            <AnimatePresence>
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-full items-center justify-center"
                >
                  <span
                    className={`font-serif text-[0.68rem] font-semibold uppercase tracking-[0.14em] ${
                      isDarkCover ? "text-parchment/40" : "text-ink/25"
                    }`}
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    {shortTitle}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
