import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatAssistant } from "@/components/chat-assistant";
import { BackgroundGrid } from "@/components/background-grid";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/custom-cursor";
import { PageProgress } from "@/components/page-progress";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nadeem | Senior Full Stack Developer",
    template: "%s | Nadeem",
  },
  description: "Senior Full Stack Developer specializing in React, Next.js, and building high-impact digital products. 4+ years of experience in solving complex technical challenges.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Expert", "Node.js", "TypeScript", "Product Engineer"],
  authors: [{ name: "Nadeem" }],
  creator: "Nadeem",
  metadataBase: new URL("https://nadeem.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nadeem.dev",
    title: "Nadeem | Senior Full Stack Developer",
    description: "Building scalable, high-performance web applications and digital products.",
    siteName: "Nadeem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadeem | Senior Full Stack Developer",
    description: "Building scalable, high-performance web applications and digital products.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nadeem",
    "url": "https://nadeem.dev",
    "jobTitle": "Senior Full Stack Developer",
    "description": "Senior Full Stack Developer specializing in React, Next.js, and building high-impact digital products.",
    "sameAs": [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
      "https://twitter.com/yourusername"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "Product Design"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <PageProgress />
            <CustomCursor />
            <BackgroundGrid />
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
            {/* <ChatAssistant /> */}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
