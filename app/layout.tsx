import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/layout/NavBar";
import AnimatedCursor from "react-animated-cursor";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trilochan Satapathy - Senior Software Engineer & Data Engineer",
  description:
    "Senior Software Engineer with 8+ years of experience in full-stack development, data engineering, and backend systems. Expert in Next.js, React, TypeScript, Python, FastAPI, PostgreSQL, Neo4j, and cloud platforms.",
  keywords: [
    "Trilochan Satapathy",
    "Senior Software Engineer",
    "Data Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Neo4j",
    "Node.js",
    "AWS",
    "Docker",
    "Data Engineering",
    "Backend Development",
  ],
  authors: [{ name: "Trilochan Satapathy", url: "https://github.com/Trilochan20" }],
  openGraph: {
    title: "Trilochan Satapathy - Senior Software Engineer & Data Engineer",
    description:
      "Senior Software Engineer with 8+ years of experience building scalable web applications, backend systems, and data-intensive platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={lora.className}>
        <Providers>
          <NavBar />
          {children}
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            // hasBlendMode={true}
            innerStyle={{
              backgroundColor: "var(--cursor-color)",
            }}
            outerStyle={{
              border: "3px solid var(--cursor-color)",
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
