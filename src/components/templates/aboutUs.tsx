import Image from "next/image";
import Data from "@/data/data";
import style from "@/styles/styles.module.css";
import SectionHeader from "../molecules/SectionHeader";
import ButtonAnimate from "../molecules/ButtonAnimate";

const AboutUs = () => {
  const data = Data.aboutUs;
  return (
    <section className="bg-background text-white" id="about">
      <div className="relative max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-16 md:py-24 lg:py-32 xl:py-36">
        <div className="grid md:grid-cols-2 px-4">
          <div className={style["meshllo__about_image"]}>
            <Image
              className="rounded-3xl w-full"
              src="/aboutUs.png"
              alt="Hero Image 3"
              width={500}
              height={500}
            />
          </div>
          <article className="pl-4 xl:pl-8">
            <SectionHeader
              title={data.title}
              subtitle={data.subtitle}
              details={data.details}
              textAlignment="left"
              detailsAlignment="justify"
            />
            <p className="font-sans font-semibold text-tertiary text-base md:text-2xl pt-4 md:pt-6 lg:pt-8">
              {data.dialog}
            </p>
            <ButtonAnimate
              text="Download Here"
              href="/Meshllo_Profile.pdf"
              target="_blanks"
            />
          </article>
        </div>
        <h1 className="px-2 sm:px-4 text-gradient text-center font-serif text-2xl md:text-4xl lg:text-6xl xl:text-7xl !leading-snug pt-40 pb-8">
          {data.content.header}
        </h1>
        <div className="flex justify-center gap-6 md:gap-12 lg:gap-20 xl:gap-32 px-2">
          {data.content.data.map((item, index) => (
            <div
              key={`about-us-item-${index}`}
              className="grid font-sans gap-1 md:gap-5 text-center "
            >
              <div className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-serif font-semibold text-tertiary">
                {item.text}
              </div>
              <div className=" text-sm md:text-lg lg:text-2xl font-light">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
