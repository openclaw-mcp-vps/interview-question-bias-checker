import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Bias Checker — Flag Biased Language in Job Interview Questions",
  description: "AI-powered tool that reviews interview questions for gender, age, and cultural bias. Built for HR teams and startup founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3ad7b4e7-2c03-4d18-ba41-656f632467b0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
