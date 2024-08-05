import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/layout/NavBar";
import AnimatedCursor from "react-animated-cursor";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trilochan Satapathy",
  description:
    "Trilochan Satapathy | React | Nextjs | Tailwind | Developer | Freelancer for hire",
  icons: [
    { rel: "favicon", url: "/favicon-16x16.png" },
    { rel: "icon", url: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "android-chrome", url: "/android-chrome-192x192.png" },
    { rel: "android-chrome", url: "/android-chrome-512x512.png" },
  ],
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
