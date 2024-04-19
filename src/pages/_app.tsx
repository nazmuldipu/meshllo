import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans, Roboto_Serif } from "next/font/google";
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dmSans.variable} ${robotoSerif.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
