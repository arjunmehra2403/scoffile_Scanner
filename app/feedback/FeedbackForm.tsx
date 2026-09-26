"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Star, PartyPopper, UtensilsCrossed } from "lucide-react";
import Logo from "@/components/Logo";
import BrandFooter from "@/components/BrandFooter";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      setError("Please choose a star rating before submitting.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center bg-cream px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-bloom-100"
        >
          <PartyPopper size={36} className="text-bloom-500" />
        </motion.div>
        <h1 className="mt-5 font-display text-2xl font-semibold text-ink">Thanks, {name || "friend"}!</h1>
        <p className="mt-2 max-w-[32ch] text-sm text-ink-soft">
          Your feedback helps us keep Scooffle fresh and tasty. See you again soon.
        </p>
        <Link href="/menu" className="focus-ring mt-8 flex items-center gap-2 rounded-2xl bg-bloom-500 px-5 py-3 text-sm font-semibold text-cream active:scale-[0.98]">
          <UtensilsCrossed size={18} />
          Browse the menu
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-cream px-5 pb-12 pt-8">
      <div className="container-page">
        <div className="flex items-center justify-between">
          <Link href="/" className="focus-ring flex items-center gap-1.5 rounded-full bg-white py-2 pl-2.5 pr-3.5 text-sm font-medium text-ink-soft shadow-card active:scale-95">
            <ArrowLeft size={16} />
            Home
          </Link>
          <Logo size={34} />
        </div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mt-6">
          <h1 className="font-display text-2xl font-semibold text-ink">How was your Scooffle?</h1>
          <p className="mt-1 text-sm text-ink-soft">Tell us what you loved — or what we can do better.</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
          <div className="rounded-3xl bg-white p-5 shadow-card">
            <p className="text-sm font-medium text-ink">Your rating</p>
            <div className="mt-2 flex gap-1.5" onMouseLeave={() => setHovered(0)}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onMouseEnter={() => setHovered(n)}
                  onClick={() => setRating(n)}
                  className="focus-ring rounded-full p-0.5"
                  aria-label={`${n} star${n > 1 ? "s" : ""}`}
                >
                  <Star
                    size={30}
                    className={(hovered || rating) >= n ? "fill-mustard text-mustard" : "fill-transparent text-bloom-200"}
                    strokeWidth={1.5}
                  />
                </button>
              ))}
            </div>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-ink">Name (optional)</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="focus-ring rounded-2xl border border-bloom-100 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-ink">Comments</span>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Tell us about the food, service, or anything else…"
              rows={4}
              className="focus-ring resize-none rounded-2xl border border-bloom-100 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50"
            />
          </label>

          <AnimatePresence>
            {error && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-sm font-medium text-chili">
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <button type="submit" className="focus-ring rounded-2xl bg-bloom-500 py-3.5 text-sm font-semibold text-cream shadow-pop transition active:scale-[0.98]">
            Submit feedback
          </button>
        </form>

        <BrandFooter />
      </div>
    </main>
  );
}
