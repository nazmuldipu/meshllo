import Navbar from "@/components/templates/navbar";
import Atoms from "@/components/templates/atoms";
import Hero from "@/components/templates/hero";
import Engagement from "@/components/templates/engagement";
import Services from "@/components/templates/services";
import AboutUs from "@/components/templates/aboutUs";
import Footer from "@/components/templates/footer";
import Head from "next/head";

export default function Home() {
  return (
    <article className="pt-8 bg-white">
      <Head>
        <title>Meshllo | Your development partner</title>
      </Head>
      <Navbar />
      <Hero />
      <Engagement />
      <Services />
      <AboutUs />
      <div className="bg-secondary">
        <Atoms />
      </div>
      <Footer />
    </article>
  );
}
