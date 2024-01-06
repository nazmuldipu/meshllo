import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className="text-4xl">Meshllo</div>
      <div>coming soon</div>
    </main>
  );
}
