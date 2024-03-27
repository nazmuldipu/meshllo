import Image from "next/image";
import Data from "@/data/data";
import style from "@/styles/styles.module.css";
import SectionHeader from "../molecules/SectionHeader";
import ButtonAnimate from "../molecules/ButtonAnimate";

const AboutUs = () => {
  const data = Data.aboutUs;
  return (
    <section className="bg-primary text-white" id="about">
      <div className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto pt-10 md:pt-20 lg:pt-32 pb-24">
        <div className="grid gap-4 md:gap-14 md:grid-cols-2 px-4">
          <div className={style["meshllo__about_image"]}>
            <Image
              className=" rounded-3xl opacity-30 absolute top-0 left-0"
              src="/hero_3.jpg"
              alt="Hero Image 3"
              width={500}
              height={500}
            />
            <Image
              className=" rounded-3xl opacity-50 absolute top-5 md:top-10 left-5 md:left-10"
              src="/hero_2.jpg"
              alt="Hero Image 3"
              width={500}
              height={500}
            />
            <Image
              className=" rounded-3xl absolute top-10 md:top-20 left-10 md:left-20"
              src="/about_1.jpg"
              alt="Hero Image 3"
              width={500}
              height={500}
            />
          </div>
          <article className="lg:pl-4 xl:pl-0">
            <SectionHeader
              title={data.title}
              subtitle={data.subtitle}
              details={data.details}
              textAlignment="left"
            />
            <p className="font-sans font-semibold text-tertiary text-base md:text-xl pt-4 md:pt-6 lg:pt-8">
              {data.dialog}
            </p>
            <ButtonAnimate text="Download Here" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
