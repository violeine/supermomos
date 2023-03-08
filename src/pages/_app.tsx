import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.variable} font-sans bg-main-gradient min-h-screen text-gray-900 px-28 pt-6 pb-24`}
    >
      <header className="flex justify-between w-full">
        <div>logo</div>
        <ul className="flex gap-12 font-medium">
          <li>Blog</li>
          <li>Social</li>
          <li>Past Social</li>
          <li>Clubs</li>
          <li>Contact</li>
        </ul>
      </header>
      <Component {...pageProps} />
      <Toaster />
    </main>
  );
}
