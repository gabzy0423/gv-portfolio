import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
