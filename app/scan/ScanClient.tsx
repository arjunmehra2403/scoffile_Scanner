"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ScanLine, ArrowRight } from "lucide-react";
import QRDisplay from "@/components/QRDisplay";
import Logo from "@/components/Logo";

const DEST_COPY = {
  menu: { label: "Feedback", path: "/feedback" },
  feedback: { label: "Menu", path: "/menu" },
} as const;

type Dest = keyof typeof DEST_COPY;

export default function ScanClient() {
  const router = useRouter();
  const params = useSearchParams();
  const destParam = params.get("dest");
  const dest: Dest = destParam === "menu" ? "menu" : "feedback";
  const copy = DEST_COPY[dest];

  const [targetUrl, setTargetUrl] = useState("");

  useEffect(() => {
    setTargetUrl(`${window.location.origin}${copy.path}`);
  }, [copy.path]);

  return (
    <main className="min-h-dvh bg-ink px-5 pb-10 pt-8 text-cream">
      <div className="container-page">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="focus-ring flex items-center gap-1.5 rounded-full bg-white/10 py-2 pl-2.5 pr-3.5 text-sm font-medium text-cream/90 active:scale-95"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <Logo size={34} />
        </div>

        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-bloom-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-bloom-300">
            <ScanLine size={14} />
            {copy.label} QR code
          </span>
          <h1 className="mt-3 font-display text-2xl font-semibold">
            Scan this with your phone camera
          </h1>
          <p className="mt-1.5 text-sm text-cream/60">
            It will open {copy.label.toLowerCase()} on your own phone.
          </p>
        </div>

        <div className="mt-7">
          {targetUrl ? <QRDisplay value={targetUrl} /> : <div className="aspect-square w-full rounded-[28px] bg-white/5" />}
        </div>

        <button
          onClick={() => router.push(copy.path)}
          className="focus-ring mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 py-3 text-sm font-medium text-cream/80 transition active:scale-[0.98]"
        >
          Already scanned? Open {copy.label} here
          <ArrowRight size={15} />
        </button>
      </div>
    </main>
  );
}
