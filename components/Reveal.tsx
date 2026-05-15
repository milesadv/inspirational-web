"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  animation?: "up" | "fade" | "scale" | "image";
  delay?: number;
};

const durations: Record<string, number> = {
  up: 1100,
  fade: 900,
  scale: 900,
  image: 1400
};

export function Reveal({
  children,
  className = "",
  animation = "up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ms = durations[animation] ?? 900;
    const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
    const hasTranslate = animation === "up";

    const trigger = () => {
      el.style.transition = [
        `opacity ${ms}ms ${ease}`,
        hasTranslate ? `transform ${ms}ms ${ease}` : ""
      ].filter(Boolean).join(", ");

      requestAnimationFrame(() => {
        el.style.opacity = "1";
        if (hasTranslate) el.style.transform = "translateY(0)";
      });
    };

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight + 40;

    if (inView) {
      setTimeout(trigger, delay * 1000 + 50);
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(trigger, delay * 1000);
            observer.unobserve(el);
          }
        },
        { threshold: 0, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, [animation, delay]);

  const initialTransform = animation === "up" ? "translateY(24px)" : undefined;

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: initialTransform }}
    >
      {children}
    </div>
  );
}
