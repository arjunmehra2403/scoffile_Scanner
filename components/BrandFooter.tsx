import { MapPin, Phone, Instagram } from "lucide-react";
import { restaurant } from "@/lib/menuData";

export default function BrandFooter() {
  return (
    <footer className="mt-10 border-t border-bloom-100 pt-6 text-center">
      <p className="flex items-start justify-center gap-2 text-sm text-ink-soft">
        <MapPin size={16} className="mt-0.5 shrink-0 text-bloom-500" />
        <span>{restaurant.address}</span>
      </p>
      <p className="mt-2 flex items-center justify-center gap-2 text-sm text-ink-soft">
        <Phone size={16} className="shrink-0 text-bloom-500" />
        <span>{restaurant.phones.join("  ·  ")}</span>
      </p>
      <p className="mt-2 flex items-center justify-center gap-2 text-sm text-ink-soft">
        <Instagram size={16} className="shrink-0 text-bloom-500" />
        <span>{restaurant.instagram}</span>
      </p>
    </footer>
  );
}
