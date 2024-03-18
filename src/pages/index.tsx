import Image from "next/image";
import { DM_Sans, Roboto_Serif } from "next/font/google";
import Navbar from "@/components/templates/navbar";
import Atoms from "@/components/templates/atoms";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});

export default function Home() {
  return (
    <main
      className={`${dmSans.variable} ${robotoSerif.variable} pt-10 bg-primary`}
    >
      <Navbar />

      <div className="bg-secondary">
        <Atoms />
      </div>
    </main>
  );
}
