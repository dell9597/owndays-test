"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface StyleCard {
  title: string;
  imageUrl: string;
  productName: string;
  productCode: string;
  price: string;
  description: string;
  colors: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const styleCards: StyleCard[] = [
  {
    title: "style1",
    imageUrl: "/lifestyle/style-1.jpg",
    productName: "OWNDAYS × MELLER Fusion",
    productCode: "OM-001",
    price: "¥16,500",
    description:
      "Oversized square frame with a subtle gradient tint. Perfect for urban streetwear looks.",
    colors: ["#1a1a1a", "#c8a97e", "#4a6fa5"],
  },
  {
    title: "style2",
    imageUrl: "/lifestyle/style-2.jpg",
    productName: "OWNDAYS × MELLER Coast",
    productCode: "OM-002",
    price: "¥14,300",
    description:
      "Lightweight round frame inspired by coastal minimalism. Pairs effortlessly with casual fits.",
    colors: ["#2c4a3e", "#d4c5a9", "#8b5e3c"],
  },
  {
    title: "style3",
    imageUrl: "/lifestyle/style-3.jpg",
    productName: "OWNDAYS × MELLER Dusk",
    productCode: "OM-003",
    price: "¥15,400",
    description:
      "Cat-eye silhouette with a retro-modern edge. Statement piece for any occasion.",
    colors: ["#3d2b1f", "#e8d5c4", "#6b4226"],
  },
  {
    title: "style4",
    imageUrl: "/lifestyle/style-4.jpg",
    productName: "OWNDAYS × MELLER Nord",
    productCode: "OM-004",
    price: "¥13,200",
    description:
      "Slim rectangular frame built for a clean, intellectual aesthetic.",
    colors: ["#0d0d0d", "#b0bec5", "#78909c"],
  },
  {
    title: "style5",
    imageUrl: "/lifestyle/style-5.jpg",
    productName: "OWNDAYS × MELLER Terra",
    productCode: "OM-005",
    price: "¥16,500",
    description:
      "Thick acetate frames in earth tones—grounded style for everyday wear.",
    colors: ["#5c4033", "#a1887f", "#d7ccc8"],
  },
  {
    title: "style6",
    imageUrl: "/lifestyle/style-6.jpg",
    productName: "OWNDAYS × MELLER Soleil",
    productCode: "OM-006",
    price: "¥17,600",
    description:
      "Oversized aviator with polarised lenses. Built for bright days and bold moves.",
    colors: ["#bf9000", "#f0e68c", "#4e342e"],
  },
  {
    title: "style7",
    imageUrl: "/lifestyle/style-7.jpg",
    productName: "OWNDAYS × MELLER Haze",
    productCode: "OM-007",
    price: "¥14,300",
    description:
      "Soft oval frame with a translucent finish—effortless and understated.",
    colors: ["#e0d7f0", "#9575cd", "#311b92"],
  },
  {
    title: "style8",
    imageUrl: "/lifestyle/style-8.jpg",
    productName: "OWNDAYS × MELLER Glace",
    productCode: "OM-008",
    price: "¥15,400",
    description:
      "Clear frame with coloured accents—modern and versatile for any outfit.",
    colors: ["#e8f5e9", "#66bb6a", "#1b5e20"],
  },
  {
    title: "style9",
    imageUrl: "/lifestyle/style-9.jpg",
    productName: "OWNDAYS × MELLER Nox",
    productCode: "OM-009",
    price: "¥18,700",
    description:
      "Matte black wraparound frame with sporty DNA and a street-ready finish.",
    colors: ["#111111", "#ff5a1f", "#444444"],
  },
  {
    title: "style10",
    imageUrl: "/lifestyle/style-10.jpg",
    productName: "OWNDAYS × MELLER Blanche",
    productCode: "OM-010",
    price: "¥13,200",
    description:
      "Minimalist wire frame with geometric proportions—less is more.",
    colors: ["#f5f5f5", "#bdbdbd", "#757575"],
  },
  {
    title: "style11",
    imageUrl: "/lifestyle/style-11.jpg",
    productName: "OWNDAYS × MELLER Ember",
    productCode: "OM-011",
    price: "¥16,500",
    description:
      "Bold tortoiseshell with warm amber lenses. Autumn energy all year round.",
    colors: ["#6d4c41", "#ff8f00", "#3e2723"],
  },
  {
    title: "style12",
    imageUrl: "/lifestyle/style-12.jpg",
    productName: "OWNDAYS × MELLER Zenit",
    productCode: "OM-012",
    price: "¥19,800",
    description:
      "Titanium double-bridge frame—lightweight, durable, and distinctly premium.",
    colors: ["#cfd8dc", "#78909c", "#37474f"],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ColorSwatch({ color }: { color: string }) {
  return (
    <span
      className="inline-block size-5 rounded-full border border-neutral-700"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  );
}

function Modal({
  card,
  onClose,
}: {
  card: StyleCard | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!card) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [card, onClose]);

  useEffect(() => {
    document.body.style.overflow = card ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [card]);

  if (!card) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${card.productName} details`}
    >
      <div
        className="relative flex w-full max-w-xl flex-col overflow-hidden border-2 border-neutral-950 bg-white sm:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-64 w-full shrink-0 sm:h-auto sm:w-56">
          <Image
            src={card.imageUrl}
            alt={card.productName}
            fill
            sizes="(min-width: 640px) 224px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              {card.productCode}
            </p>
            <h3 className="mt-1 font-display text-2xl font-black uppercase leading-tight text-neutral-950">
              {card.productName}
            </h3>
            <p className="mt-1 text-xl font-bold text-[#ff5a1f]">
              {card.price}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-neutral-600">
            {card.description}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Colors
            </span>
            <div className="flex gap-1.5">
              {card.colors.map((c) => (
                <ColorSwatch key={c} color={c} />
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-2 pt-2">
            <button
              type="button"
              className="w-full bg-[#FF6723] px-6 py-3 font-display text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#923B14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
            >
              Shop Now
            </button>
            <button
              type="button"
              className="w-full border border-neutral-300 px-6 py-3 font-display text-sm font-black uppercase tracking-widest text-neutral-950 transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
            >
              Add to Wishlist
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex size-8 items-center justify-center bg-neutral-950 text-white transition hover:bg-[#ff5a1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────

const AUTO_SLIDE_INTERVAL = 3000; 
const RESUME_DELAY = 2000;  
const MOMENTUM_FRICTION = 0.90; 
const MOMENTUM_THRESHOLD = 0.5;

// ─── Main Section ─────────────────────────────────────────────────────────────

export function HowToStyleSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<StyleCard | null>(null);

  // ── Auto-slide via intervalRef (cancel immediately on interact) ───────────
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slideNext = useCallback(() => {
    const el = trackRef.current;
    if (!el || activeModal) return;
    const cardWidth = el.querySelector("article")?.offsetWidth ?? 360;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= maxScroll - 4) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }, [activeModal]);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(slideNext, AUTO_SLIDE_INTERVAL);
  }, [slideNext]);

  const scheduleResume = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(startAutoSlide, RESUME_DELAY);
  }, [startAutoSlide]);

  // Start on mount, stop on unmount
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  // ── Mouse drag + momentum scroll ─────────────────────────────────────────
  const dragRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
    lastX: 0,
  });
  const velRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const cancelMomentum = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = trackRef.current;
      if (!el) return;
      // Stop auto-slide immediately — no delay
      stopAutoSlide();
      cancelMomentum();
      velRef.current = 0;
      dragRef.current = {
        active: true,
        startX: e.pageX,
        scrollLeft: el.scrollLeft,
        moved: false,
        lastX: e.pageX,
      };
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    },
    [stopAutoSlide, cancelMomentum]
  );

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const el = trackRef.current;
    if (!el) return;
    const dx = e.pageX - dragRef.current.startX;
    if (Math.abs(dx) > 4) dragRef.current.moved = true;
    // Track velocity as delta between frames for momentum later
    velRef.current = dragRef.current.lastX - e.pageX;
    dragRef.current.lastX = e.pageX;
    el.scrollLeft = dragRef.current.scrollLeft - dx;
  }, []);

  const onMouseUp = useCallback(() => {
    const el = trackRef.current;
    if (!el || !dragRef.current.active) return;
    dragRef.current.active = false;
    el.style.cursor = "";
    el.style.userSelect = "";

    // Apply momentum: keep scrolling and decay velocity each frame
    const applyMomentum = () => {
      const track = trackRef.current;
      if (!track) return;
      if (Math.abs(velRef.current) < MOMENTUM_THRESHOLD) {
        velRef.current = 0;
        scheduleResume();
        return;
      }
      track.scrollLeft += velRef.current;
      velRef.current *= MOMENTUM_FRICTION;
      rafRef.current = requestAnimationFrame(applyMomentum);
    };
    rafRef.current = requestAnimationFrame(applyMomentum);
  }, [scheduleResume]);

  // ── Mouse wheel — horizontal scroll ──────────────────────────────────────
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        stopAutoSlide();
        el.scrollLeft += e.deltaX;
        scheduleResume();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, [stopAutoSlide, scheduleResume]);

  // ── Touch — pause on start, resume after end ──────────────────────────────
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onTouchStart = () => stopAutoSlide();
    const onTouchEnd = () => scheduleResume();
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [stopAutoSlide, scheduleResume]);

  // ── Click guard — suppress click after drag ───────────────────────────────
  const onClickCapture = useCallback((e: React.MouseEvent) => {
    if (dragRef.current.moved) {
      e.stopPropagation();
      dragRef.current.moved = false;
    }
  }, []);

  const closeModal = useCallback(() => setActiveModal(null), []);

  return (
    <>
      <section id="about" className="overflow-hidden bg-[#FF6723] pb-0 pt-[120px] md:pt-[160px] mt-[-1px]">
        {/* ── Heading ── */}
        <div className="relative z-10 px-4 px-[17px] sm:px-6 md:px-[70px]">
          <div className="font-display text-[52px] min-[430px]:text-[60px] md:text-[100px] lg:text-[160px] font-black uppercase leading-[0.54] md:leading-[0.54] lg:leading-[0.55] tracking-normal">
            
            <span className="inline-block text-[#FF6723] bg-[#000000] mb-2 md:mb-3 lg:mb-[30px] pt-[9px] pb-[0px] md:pt-[15px] md:pb-[1px] lg:pt-[24px] lg:pb-[2px] tracking-[-0.06em]">
              How To
            </span>
            <br/>
            <span className="inline-block text-[#FF6723] bg-[#000000] pt-[9px] pb-[0px] md:pt-[15px] md:pb-[1px] lg:pt-[23px] lg:pb-[2px] tracking-[-0.04em] md:tracking-normal">
              Style Them
            </span>
          </div>
        </div>

        {/* ── Card carousel strip ── */}
        <div className="relative -mt-6 md:-mt-14">
          <div className="border-t-2 border-neutral-950" />

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory overflow-x-auto cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onClickCapture={onClickCapture}
          >
            {styleCards.map((card) => (
              <article
                key={card.title}
                className="relative min-w-[78vw] shrink-0 snap-start border-r-2 border-neutral-950 bg-black sm:min-w-[406px]"
              >
                <div className="relative h-[420px] md:h-[590px]">
                  <Image
                    src={card.imageUrl}
                    alt={`OWNDAYS × MELLER styling: ${card.productName}`}
                    fill
                    sizes="(min-width: 768px) 360px, 78vw"
                    className="object-cover pointer-events-none select-none"
                    draggable={false}
                  />
                </div>

                {/* + button */}
                <button
                  type="button"
                  aria-label={`View ${card.productName} details`}
                  onClick={() => setActiveModal(card)}
                  className="group absolute bottom-0 right-0 flex size-14 items-center justify-center bg-[#ff5a1f] font-display text-4xl font-black leading-none text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span
                    className="block transition-transform duration-200 group-hover:rotate-45 pt-[5px]"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      <Modal card={activeModal} onClose={closeModal} />
    </>
  );
}