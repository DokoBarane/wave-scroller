import { useEffect, useState } from "react";
import { useSectionScrollProgress } from "@/hooks/use-scroll-motion";

/** Full-width image band with a gentle scroll parallax. */
export function ParallaxBand({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  const { ref, progress } = useSectionScrollProgress<HTMLDivElement>();
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const shift = reduced ? 0 : (progress - 0.5) * 12;

  return (
    <div
      ref={ref}
      className="relative isolate h-[320px] overflow-hidden sm:h-[420px]"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-[124%] w-full object-cover will-change-transform"
        style={{ transform: `translate3d(0, ${shift}%, 0)` }}
      />
      <div className="absolute inset-0 bg-brand-dark/55" />
      <div className="absolute inset-0 gradient-brand opacity-25 mix-blend-multiply" />
      <div className="relative mx-auto flex h-full max-w-7xl items-end px-5 pb-10 sm:px-8 sm:pb-14">
        <p className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-primary-foreground sm:text-3xl">
          {caption}
        </p>
      </div>
    </div>
  );
}
