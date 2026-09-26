import Logo from "@/components/Logo";
import ChoiceCard from "@/components/ChoiceCard";
import BrandFooter from "@/components/BrandFooter";
import { restaurant } from "@/lib/menuData";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-bloom-100 via-cream to-cream px-5 pb-10 pt-12">
      <div className="container-page flex flex-col items-center text-center">
        <Logo size={64} />


        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">{restaurant.name}</h1>
        <p className="mt-1 text-sm font-medium uppercase tracking-wide text-bloom-500">{restaurant.tagline}</p>

        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-600" />
          100% Veg
        </span>

        <p className="mt-8 max-w-[26ch] font-body text-base text-ink-soft">What would you like to do?</p>

        <div className="mt-5 flex w-full flex-col gap-4">
          <ChoiceCard
            href="/scan?dest=feedback"
            title="Menu"
            subtitle="Scan the Menu code on your table to continue"
            icon="menu"
            tone="bloom"
            delay={0.05}
          />
          <ChoiceCard
            href="/scan?dest=menu"
            title="Feedback"
            subtitle="Scan the Feedback code on your table to continue"
            icon="feedback"
            tone="ink"
            delay={0.15}
          />
        </div>

        <BrandFooter />
      </div>
    </main>
  );
}
