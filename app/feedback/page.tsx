import type { Metadata } from "next";
import FeedbackForm from "./FeedbackForm";

export const metadata: Metadata = { title: "Feedback | Scooffle" };

export default function FeedbackPage() {
  return <FeedbackForm />;
}
