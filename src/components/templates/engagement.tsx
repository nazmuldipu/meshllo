import Data from "@/data/data";
import SectionHeader from "../molecules/SectionHeader";
import SVGIcon from "../icons/SVGIcon";
import Image from "next/image";
import style from "@/styles/styles.module.css";
import Link from "next/link";
import DiamondIcon from "../icons/DiamondIcon";
import UserIcon from "../icons/UserIcon";

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
        <div className="max-w-screen-md xl:max-w-screen-xl mx-auto pt-10 md:pt-20 lg:pt-32 pb-24">
          <SectionHeader title={data.title} subtitle={data.subtitle} />
          <div className={style["meshllo__engagement-content"]}>
            <div className={style["meshllo__engagement-image"]}>
              {data.images.map((item, index) => (
                <div
                  className={`flex gap-4 ${index % 2 === 0 ? "" : " -mt-20"}`}
                  key={item.alt}
                >
                  <Image
                    className="order-2 rounded-3xl"
                    src={item.src}
                    alt="Hero Image 3"
                    width={500}
                    height={500}
                  />
                  <div
                    className={`flex flex-col items-center justify-center ${
                      index % 2 === 0 ? "order-3" : "order-1"
                    }`}
                  >
                    <h3 className="font-serif text-2xl xl:text-6xl font-bold">
                      {item.number}
                    </h3>
                    <div className="font-sans text-sm md:text-base tracking-wide">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4">
              <h3 className="font-serif font-semibold text-primary text-xl lg:text-3xl xl:text-5xl leading-snug tracking-wide">
                {data.content.header}
              </h3>
              {data.content.data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-2 xl:gap-4 pt-4 xl:pt-12"
                >
                  <div className="bg-meshllo w-12 h-12 rounded-full flex justify-center items-center shrink-0">
                    <SVGIcon
                      icon={getIcon(item.icon)}
                      size={28}
                      pathClassName="text-white"
                    />
                  </div>
                  <div className="text-main-text">
                    <h4 className="text-lg lg:text-xl xl:text-2xl font-semibold xl:mb-2">
                      {item.title}
                    </h4>
                    <p className="font-sans text-sm lg:text-base xl:text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-28 md:-mt-24 lg:-mt-20 xl: px-4 max-w-screen-md xl:max-w-screen-lg mx-auto">
        <div className={style["meshllo__engagement-lets-talk"]}>
          <h3 className="font-serif font-semibold text-xl md:text-3xl xl:text-5xl text-white text-center">
            {data.dialog}
          </h3>
          <Link
            href="mailto:nazmul@meshllo.com"
            className=" bg-secondary font-sans px-4 py-2 rounded-full mt-6"
          >
            Email Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
