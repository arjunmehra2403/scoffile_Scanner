import type { Metadata } from "next";
import MenuView from "@/components/MenuView";

export const metadata: Metadata = { title: "Menu | Scooffle" };

export default function MenuPage() {
  return <MenuView />;
}
