import Data from "@/data/data";
import SectionHeader from "../molecules/SectionHeader";
import SVGIcon from "../icons/SVGIcon";
import Image from "next/image";
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
    <section className="" id="engagement">
      <div className="bg-secondary">
        <div className="max-w-screen-md xl:max-w-screen-xl mx-auto pt-10 md:pt-20 lg:pt-32 pb-48">
          <SectionHeader title={data.title} subtitle={data.subtitle} />
          <div className={style["meshllo__engagement-content"]}>
            <div className={style["meshllo__engagement-image"]}>
              <Image
                className="order-2 rounded-3xl flex-shrink-0 xl:w-125"
                src={data.image.src}
                style={{
                  objectFit: "cover",
                }}
                alt="Hero Image 3"
                width={286}
                height={345}
              />
              {data.info.map((item, index) => (
                <div
                  className={`absolute md:gap-4 ${
                    index % 2 === 0 ? "top-20 right-0" : "bottom-20 left-0"
                  }`}
                  key={item.text}
                >
                  <div
                    className={`flex flex-col items-center justify-center w-36 xl:w-40 text-center ${
                      index % 2 === 0 ? "order-3" : "order-1"
                    }`}
                  >
                    <h3 className="font-serif text-2xl xl:text-6xl font-bold">
                      {item.number}
                    </h3>
                    <div className="font-sans text-sm xl:text-base tracking-wide">
                      {parse(item.text)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 flex flex-col justify-center">
              <h3 className="whitespace-pre-line font-serif font-semibold text-primary text-2xl lg:text-2xl xl:text-5xl leading-snug tracking-wide pt-6 md:pt-0">
                {data.content.header}
                {/* {data.content.header.split("\n").map((string, i) => (
                  <div key={`${string + i}`}>{string}</div>
                ))} */}
              </h3>
              {data.content.data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-2 xl:gap-4 pt-8 xl:pt-12"
                >
                  <div className="bg-meshllo w-12 h-12 rounded-full flex justify-center items-center shrink-0">
                    <SVGIcon
                      icon={getIcon(item.icon)}
                      size={28}
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
      <div className="-mt-40 md:-mt-24 lg:-mt-28 xl: px-4 max-w-screen-md xl:max-w-screen-xl mx-auto">
        <div className={style["meshllo__engagement-lets-talk"]}>
          <h3 className="font-serif font-semibold text-xl md:text-3xl xl:text-5xl xl:leading-snug text-white text-center">
            {data.dialog}
          </h3>
          <div className="bg-secondary text-xl font-medium font-sans px-8 py-2 rounded-full mt-6">
            <Link href="mailto:nazmul@meshllo.com" className="text-meshllo">
              {data.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
