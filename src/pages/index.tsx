import Image from "next/image";
import { DM_Sans, Roboto_Serif } from "next/font/google";
import Navbar from "@/components/navbar";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});

export default function Home() {
  return (
    <main className={` ${dmSans.variable} ${robotoSerif.variable}`}>
      <Navbar />
      <div className=" font-sans">abcd</div>
      <div className=" font-serif">abcd</div>
      <div className="text-4xl">Meshllo</div>
      <div>coming soon</div>
    </main>
  );
}
