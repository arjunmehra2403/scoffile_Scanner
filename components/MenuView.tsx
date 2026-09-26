"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MessageCircleHeart } from "lucide-react";
import Logo from "@/components/Logo";
import BrandFooter from "@/components/BrandFooter";
import { menuGroups, highlights, specials, restaurant } from "@/lib/menuData";

const allSections = menuGroups.flatMap((g) => g.sections);

export default function MenuView() {
  const [activeId, setActiveId] = useState(allSections[0]?.id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          setActiveId(topMost.target.id);
        }
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-dvh bg-cream pb-16">
      <div className="bg-gradient-to-b from-bloom-400 to-bloom-500 px-5 pb-8 pt-6 text-cream">
        <div className="container-page">
          <div className="flex items-center justify-between">
            <Link href="/" className="focus-ring flex items-center gap-1.5 rounded-full bg-white/15 py-2 pl-2.5 pr-3.5 text-sm font-medium active:scale-95">
              <ArrowLeft size={16} />
              Home
            </Link>
            <Logo size={34} />
          </div>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-5">
            <h1 className="font-display text-3xl font-semibold">{restaurant.name}</h1>
            <p className="mt-1 text-sm text-cream/85">{restaurant.tagline}</p>

            <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
              {highlights.map((h) => (
                <div key={h.label} className="flex shrink-0 flex-col items-center rounded-2xl bg-white/15 px-4 py-2 text-center backdrop-blur-sm">
                  <span className="font-display text-lg font-bold leading-none">{h.value}</span>
                  <span className="mt-1 text-[11px] leading-none text-cream/80">{h.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {specials.map((s) => (
                <span key={s} className="rounded-full border border-white/25 px-2.5 py-1 text-[11px] font-medium text-cream/90">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="sticky top-0 z-20 border-b border-bloom-100 bg-cream/95 backdrop-blur">
        <div className="container-page flex gap-2 overflow-x-auto py-3">
          {allSections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`focus-ring shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                activeId === s.id ? "bg-bloom-500 text-cream shadow-pop" : "bg-white text-ink-soft ring-1 ring-inset ring-bloom-100"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      <div className="container-page mt-2">
        {menuGroups.map((group) => (
          <div key={group.id} className="mt-8 first:mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-bloom-500">{group.title}</p>
            <div className="flex flex-col gap-8">
              {group.sections.map((section, sIdx) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: Math.min(sIdx * 0.04, 0.2) }}
                  className="scroll-mt-24"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-display text-xl font-semibold text-ink">{section.title}</h2>
                    {section.tag && (
                      <span className="whitespace-nowrap rounded-full bg-mustard/15 px-2.5 py-1 text-[11px] font-semibold text-amber-700">
                        {section.tag}
                      </span>
                    )}
                  </div>

                  <ul className="mt-3 flex flex-col gap-3.5">
                    {section.items.map((item) => (
                      <li key={item.name} className="flex items-start gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-end gap-2">
                            <span className="font-medium leading-snug text-ink">{item.name}</span>
                            <span className="mb-1 h-px flex-1 border-b border-dotted border-bloom-200" />
                            <span className="whitespace-nowrap font-display font-semibold text-bloom-600">₹{item.price}</span>
                          </div>
                          {item.note && <p className="mt-0.5 text-xs leading-relaxed text-ink-soft/80">{item.note}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="container-page mt-10">
        <Link href="/feedback" className="focus-ring flex items-center justify-center gap-2 rounded-2xl bg-ink py-3.5 text-sm font-semibold text-cream active:scale-[0.98]">
          <MessageCircleHeart size={18} />
          Enjoyed it? Leave feedback
        </Link>
        <BrandFooter />
      </div>
    </main>
  );
}
