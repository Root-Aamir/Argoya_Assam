import type { Metadata, Viewport } from "next"; // <-- Viewport add kiya hai yahan
import { Inter, Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// PWA ke liye Viewport settings (Next.js 14+ me zaroori hai)
export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Tumhara Metadata + PWA Manifest config
export const metadata: Metadata = {
  title: "Arogya Assam",
  description: "Screening Endemic Diseases Without Lab Tests",
  manifest: "/manifest.json", // <-- PWA connection
  appleWebApp: {              // <-- iPhones (iOS) support ke liye
    capable: true,
    statusBarStyle: "default",
    title: "Arogya Assam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}