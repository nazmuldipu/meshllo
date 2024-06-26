import Navbar from "@/components/templates/navbar";
import Hero from "@/components/templates/hero";
import Engagement from "@/components/templates/engagement";
import Services from "@/components/templates/services";
import AboutUs from "@/components/templates/aboutUs";
import Footer from "@/components/templates/footer";
import Head from "next/head";
import ContactUs from "@/components/templates/contactUs";
import Feedback from "@/components/templates/feedback";

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
      <Feedback />
      <ContactUs />
      <Footer />
    </article>
  );
}
