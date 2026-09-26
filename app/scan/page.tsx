import { Suspense } from "react";
import ScanClient from "./ScanClient";

export default function ScanPage() {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-ink" />}>
      <ScanClient />
    </Suspense>
  );
}
