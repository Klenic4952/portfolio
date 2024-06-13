import { Rubik } from "next/font/google";
import "./globals.css";

// components
import Header from "./components/Header";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Nicolien Klein",
  description:
    "Nicolien Klein is aan het pionieren als front-end webdeveloper, met speciale interesse voor leuke kleurencombinaties",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="scroll-smooth">
      <body className={rubik.className}>
        <div class="relative">
          <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute">
          </div>
          <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div class="lg:flex lg:justify-between lg:gap-4">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
