import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const generalSans = localFont({
  src: "./fonts/GeneralSans-Variable.woff2",
  display: "swap",
  variable: "--font-general-sans",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Leonardo Gusmão — Software & Product Engineer",
    template: "%s | Leonardo Gusmão",
  },
  description:
    "Software & Product Engineer building scalable solutions at the intersection of code and business value. Specializing in fullstack development, system architecture, and product-driven engineering.",
  keywords: [
    "Leonardo Gusmão",
    "Software Engineer",
    "Product Engineer",
    "Fullstack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "System Architecture",
    "Web3",
    "Product Engineering",
  ],
  authors: [{ name: "Leonardo Gusmão", url: "https://github.com/gusmaooleo" }],
  creator: "Leonardo Gusmão",
  metadataBase: new URL("https://devleoper.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR", "es_ES", "de_DE", "ja_JP", "zh_CN"],
    siteName: "Leonardo Gusmão",
    title: "Leonardo Gusmão — Software & Product Engineer",
    description:
      "Building bridges between code and business value. Explore my projects, stack, and engineering approach.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leonardo Gusmão — Software & Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Gusmão — Software & Product Engineer",
    description:
      "Building bridges between code and business value. Explore my projects, stack, and engineering approach.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-portfolio.svg",
    apple: "/logo-portfolio.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${generalSans.variable} ${firaCode.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
