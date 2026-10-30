import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "lenis/dist/lenis.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeScript = `
  try {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch {}
`;

export const metadata: Metadata = {
  title: "Gabriel Vargas | Software Developer",
  description: "A personal portfolio for Gabriel Vargas, software developer.",
  icons: {
    icon: "/images/branding/apple-touch-icon.png",
    shortcut: "/images/branding/apple-touch-icon.png",
    apple: "/images/branding/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} ${geistMono.variable} ${GeistPixelSquare.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full overflow-x-clip bg-background text-foreground">
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
