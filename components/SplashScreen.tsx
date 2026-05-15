"use client";

import { useState, useEffect, type ReactNode } from "react";

type Phase = "init" | "ip" | "expand" | "settle" | "done";

export function SplashScreen({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>("init");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timers = [
      setTimeout(() => setPhase("ip"), 100),
      setTimeout(() => setPhase("expand"), 1800),
      setTimeout(() => setPhase("settle"), 5200),
      setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
      }, 7200),
    ];
    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  const done = phase === "done";
  const expanded = phase === "expand" || phase === "settle";
  const settling = phase === "settle";
  const contentVisible = settling || done;

  return (
    <>
      {!done && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-parchment"
          style={{
            opacity: settling ? 0 : 1,
            transition: settling
              ? "opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1)"
              : "none",
          }}
        >
          <div
            className="font-serif font-semibold tracking-tight text-ink"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
              lineHeight: 1,
              whiteSpace: "nowrap",
              opacity: phase === "init" ? 0 : settling ? 0 : 1,
              transform: phase === "init" ? "scale(0.96)" : "none",
              transition:
                phase === "ip"
                  ? "opacity 1s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1)"
                  : settling
                    ? "opacity 1s cubic-bezier(0.22, 1, 0.36, 1)"
                    : "none",
            }}
          >
            <span>I</span>
            <span
              style={{
                display: "inline-block",
                maxWidth: expanded ? "18ch" : "0",
                overflow: "hidden",
                verticalAlign: "bottom",
                transition: "max-width 3s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              nspirationally
            </span>
            <span
              style={{
                display: "inline-block",
                width: expanded ? "0.32em" : "0.04em",
                transition: "width 3s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
            <span>P</span>
            <span
              style={{
                display: "inline-block",
                maxWidth: expanded ? "11ch" : "0",
                overflow: "hidden",
                verticalAlign: "bottom",
                transition: "max-width 3s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
              }}
            >
              ropelled
            </span>
          </div>
        </div>
      )}

      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "none" : "translateY(12px)",
          transition:
            contentVisible && !done
              ? "opacity 2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s, transform 2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s"
              : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
