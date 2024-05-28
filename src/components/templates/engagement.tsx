import Data from "@/data/data";
import Image from "next/image";
import SectionHeader from "../molecules/SectionHeader";
import SVGIcon from "../icons/SVGIcon";
import style from "@/styles/styles.module.css";
import Link from "next/link";
import DiamondIcon from "../icons/DiamondIcon";
import UserIcon from "../icons/UserIcon";
import parse from "html-react-parser";

const Engagement = () => {
  const data = Data.engagement;

  const getIcon = (icon: string) => {
    switch (icon) {
      case "diamond":
        return DiamondIcon;
      case "user":
        return UserIcon;
      default:
        return UserIcon;
    }
  };
  return (
    <section id="engagement">
      <div className="bg-secondary">
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-16 md:py-24 lg:py-32 xl:py-36">
          <SectionHeader title={data.title} subtitle={data.subtitle} />
          <div className={style["meshllo__engagement-content"]}>
            <h3 className="px-2 md:px-0 text-center md:text-left max-w-96 md:max-w-none self-center justify-self-center font-serif font-light text-4xl md:text-5xl lg:text-7xl xl:text-8xl !leading-tight text-gradient">
              {parse(data.content.header)}
            </h3>
            <div className="px-4 flex flex-col justify-center">
              {data.content.data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-2 xl:gap-4 pt-8 xl:pt-12"
                >
                  <div className="bg-meshllo w-12.5 h-12.5 rounded-full flex justify-center items-center shrink-0">
                    <SVGIcon
                      icon={getIcon(item.icon)}
                      size={30}
                      pathClassName="text-white"
                    />
                  </div>
                  <div className="text-main-text">
                    <h4 className="text-xl lg:text-xl xl:text-2xl font-semibold xl:mb-2 font-serif">
                      {item.title}
                    </h4>
                    <p className="font-sans text-base lg:text-base xl:text-lg pt-2">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 md:h-56 lg:h-72 xl:h-92.5">
        <div className="w-full h-full bg-background">
          <Image
            className="w-full h-full opacity-10"
            src="/programming-background-with-html.png"
            alt="Hero Image 3"
            style={{ objectFit: "cover" }}
            width={1920}
            height={370}
          />
        </div>

        <div className="absolute top-0 w-full h-full text-white">
          <div className="flex flex-col w-full h-full px-4 items-center justify-center">
            <h3 className="font-serif font-extralight text-xl md:text-3xl xl:text-5xl xl:leading-tight text-center">
              {parse(data.dialog)}
            </h3>
            <div className="bg-meshllo hover:bg-primary text-xl font-sans px-6 py-2.5 rounded-full mt-8">
              <Link href="mailto:nazmul@meshllo.com">{data.cta}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
