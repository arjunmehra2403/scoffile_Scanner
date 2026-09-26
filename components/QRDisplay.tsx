"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

type Props = {
  value: string;
};

export default function QRDisplay({ value }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    QRCode.toCanvas(canvas, value, {
      width: 320,
      margin: 1,
      color: {
        dark: "#241019",
        light: "#FFF8F4",
      },
      errorCorrectionLevel: "M",
    }).catch(() => setError(true));
  }, [value]);

  return (
    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[28px] bg-cream p-6">
      {error ? (
        <p className="px-6 text-center text-sm text-ink-soft">
          Couldn&apos;t generate the code. Refresh the page to try again.
        </p>
      ) : (
        <canvas ref={canvasRef} className="h-full w-full rounded-2xl [image-rendering:pixelated]" />
      )}

      {/* corner brackets */}
      <div className="pointer-events-none absolute inset-5 rounded-2xl">
        {[
          "top-0 left-0 border-t-4 border-l-4 rounded-tl-xl",
          "top-0 right-0 border-t-4 border-r-4 rounded-tr-xl",
          "bottom-0 left-0 border-b-4 border-l-4 rounded-bl-xl",
          "bottom-0 right-0 border-b-4 border-r-4 rounded-br-xl",
        ].map((cls, i) => (
          <span key={i} className={`absolute h-9 w-9 border-bloom-400 ${cls}`} />
        ))}
      </div>
    </div>
  );
}
