import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webhook Reliability Monitor — Track Delivery Failures Across Services",
  description: "Monitor webhook delivery success rates, retry attempts, and failure patterns across multiple services with real-time alerting."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fc12be75-5d18-4b40-9f74-0bc16b711629"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
