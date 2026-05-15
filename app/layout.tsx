import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SplashScreen } from "@/components/SplashScreen";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`
  },
  description: site.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={cormorant.variable}>
      <body className="font-serif antialiased">
        <SplashScreen>
          <Header />
          <main>{children}</main>
          <Footer />
        </SplashScreen>
      </body>
    </html>
  );
}
