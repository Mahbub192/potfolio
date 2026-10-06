import { useCallback, useEffect, useRef, useState } from "react";

interface ScrollState {
  scrolled: boolean;
  activeId: string;
  /** Call from nav clicks so Contact (short last section) stays highlighted. */
  activateSection: (id: string) => void;
}

/**
 * Tracks sticky-nav scroll state and which section is in view.
 */
export function useScrollState(ids: string[], threshold = 12): ScrollState {
  const key = ids.join(",");

  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  const pinnedId = useRef<string | null>(null);
  const pinTimer = useRef<number | null>(null);

  const activateSection = useCallback((id: string) => {
    const sectionIds = key.split(",").filter(Boolean);
    if (!sectionIds.includes(id)) return;

    pinnedId.current = id;
    setActiveId(id);
    setScrolled(true);

    if (pinTimer.current) window.clearTimeout(pinTimer.current);
    // Hold through smooth-scroll; after that hash/visibility logic takes over.
    pinTimer.current = window.setTimeout(() => {
      pinnedId.current = null;
      pinTimer.current = null;
    }, 1500);
  }, [key]);

  useEffect(() => {
    const sectionIds = key.split(",").filter(Boolean);
    if (sectionIds.length === 0) return;

    let frame = 0;
    const activateOffset = 140;

    const update = () => {
      frame = 0;
      const scrollY = window.scrollY;
      setScrolled(scrollY > threshold);

      if (pinnedId.current && sectionIds.includes(pinnedId.current)) {
        setActiveId(pinnedId.current);
        return;
      }

      const hashId = window.location.hash.replace(/^#/, "");
      if (hashId && sectionIds.includes(hashId)) {
        const hashEl = document.getElementById(hashId);
        if (hashEl) {
          const rect = hashEl.getBoundingClientRect();
          // Hash target visible in viewport → keep it active (fixes Contact vs Skills).
          const visible =
            rect.top < window.innerHeight * 0.85 && rect.bottom > activateOffset * 0.5;
          if (visible) {
            setActiveId(hashId);
            return;
          }
        }
      }

      const viewportBottom = scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const nearBottom = viewportBottom >= docHeight - 240;

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= activateOffset) {
          current = id;
        }
      }

      if (nearBottom) current = sectionIds[sectionIds.length - 1];

      setActiveId((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      if (pinTimer.current) window.clearTimeout(pinTimer.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key, threshold]);

  return { scrolled, activeId, activateSection };
}

/** Locks body scroll while an overlay (e.g. the mobile menu) is open. */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [active]);
}
