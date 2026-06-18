"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Slide = {
  title: string;
  text: string;
  badge: string;
  icon: string;
};

export default function MissionVisionSlider({ slides }: { slides: Slide[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  // Auto-advance — pauses on hover/focus
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  // Reset CSS animation without DOM re-mount (avoids key={activeSlide} remount bug)
  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;
    el.style.animation = "none";
    void el.offsetWidth; // force reflow to restart animation
    el.style.animation = "progressLoad 5000ms linear forwards";
  }, [activeSlide]);

  const goTo = (index: number) => setActiveSlide(index);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      setActiveSlide((prev) =>
        delta < 0
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    if (e.key === "ArrowRight") setActiveSlide((prev) => (prev + 1) % slides.length);
    if (e.key === " ") { e.preventDefault(); setIsPaused((p) => !p); }
  };

  return (
    <div
      className="relative overflow-hidden rounded-[2.5rem] bg-green-950 p-12 md:p-20 shadow-2xl shadow-green-950/20 text-white min-h-[380px] flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Mission and Vision"
    >
      {/* Decorative quote marks */}
      <div className="absolute -left-4 top-4 pointer-events-none select-none text-[20rem] font-heritage text-[#82E076]/5 leading-none">"</div>
      <div className="absolute -right-4 bottom-4 pointer-events-none select-none text-[20rem] font-heritage text-[#82E076]/5 leading-none">"</div>

      <div className="relative z-10 flex-1 flex flex-col justify-center">
        {/* aria-live so screen readers announce slide changes */}
        <div className="relative h-[220px] sm:h-[180px]" aria-live="polite" aria-atomic="true">
          {slides.map((slide, index) => (
            <div
              key={index}
              aria-hidden={index !== activeSlide}
              className={cn(
                "absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out",
                index === activeSlide
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto z-10"
                  : "opacity-0 translate-y-8 scale-95 pointer-events-none z-0"
              )}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] !text-[#82E076]">
                <span aria-hidden="true">{slide.icon}</span>
                <span>{slide.badge}</span>
              </span>
              <p className="mb-4 font-label text-[10px] font-black uppercase tracking-[0.4em] !text-white/40">
                {slide.title}
              </p>
              <h3 className="font-heritage text-2xl font-bold leading-snug !text-white sm:text-3xl md:text-4xl italic tracking-tight text-center max-w-2xl px-2">
                &ldquo;{slide.text}&rdquo;
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="relative z-10 mt-12 flex justify-center gap-3" role="tablist" aria-label="Slides">
        {slides.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === activeSlide}
            onClick={() => goTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82E076] focus-visible:ring-offset-2 focus-visible:ring-offset-green-950",
              index === activeSlide
                ? "w-8 bg-[#82E076]"
                : "w-2 bg-white/20 hover:bg-white/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar — animation reset via ref, not key remount */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
        <div
          ref={progressRef}
          className="h-full bg-[#82E076] w-0"
          style={{ animation: "progressLoad 5000ms linear forwards" }}
        />
      </div>
    </div>
  );
}
