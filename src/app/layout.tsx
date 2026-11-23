import "~/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Providers } from "~/trpc/react";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Barath E · AI & Machine Learning Developer",
  description:
    "Portfolio of Barath E, Artificial Intelligence & Machine Learning Developer from Chennai. Specializing in Deep Learning, Computer Vision, Data Science, NLP & LLMs. Mewar University (Class of 2028).",
  openGraph: {
    title: "Barath E · AI & Machine Learning Developer",
    description: "Artificial Intelligence, Deep Learning, Computer Vision, and Data Science. Open to internships.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#101010", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
