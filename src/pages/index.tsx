import Navbar from "@/components/templates/navbar";
import Atoms from "@/components/templates/atoms";
import Hero from "@/components/templates/hero";
import Engagement from "@/components/templates/engagement";
import Services from "@/components/templates/services";
import AboutUs from "@/components/templates/aboutUs";

export default function Home() {
  return (
    <article className="pt-8 bg-white">
      <Navbar />
      <Hero />
      <Engagement />
      <Services />
      <AboutUs />
      <div className="bg-secondary">
        <Atoms />
      </div>
    </article>
  );
}
