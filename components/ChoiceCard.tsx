"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, MessageCircleHeart } from "lucide-react";
import Link from "next/link";

const ICONS = {
  menu: UtensilsCrossed,
  feedback: MessageCircleHeart,
} as const;

type Props = {
  href: string;
  title: string;
  subtitle: string;
  icon: keyof typeof ICONS;
  delay?: number;
  tone: "bloom" | "ink";
};

export default function ChoiceCard({ href, title, subtitle, icon, delay = 0, tone }: Props) {
  const Icon = ICONS[icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        className={`focus-ring group relative flex items-center gap-4 overflow-hidden rounded-3xl border p-5 shadow-card transition-transform active:scale-[0.98] ${
          tone === "bloom" ? "border-bloom-200 bg-bloom-400 text-cream" : "border-ink/10 bg-white text-ink"
        }`}
      >
        <span
          className={`absolute -right-6 -top-8 h-28 w-28 rounded-blob transition-transform duration-500 group-hover:scale-110 ${
            tone === "bloom" ? "bg-bloom-300/50" : "bg-bloom-100"
          }`}
        />
        <span
          className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
            tone === "bloom" ? "bg-white/20" : "bg-bloom-50"
          }`}
        >
          <Icon size={26} className={tone === "bloom" ? "text-white" : "text-bloom-500"} strokeWidth={2.2} />
        </span>
        <span className="relative flex-1 text-left">
          <span className="block font-display text-lg font-semibold leading-tight">{title}</span>
          <span className={`mt-0.5 block text-sm ${tone === "bloom" ? "text-cream/85" : "text-ink-soft"}`}>
            {subtitle}
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
