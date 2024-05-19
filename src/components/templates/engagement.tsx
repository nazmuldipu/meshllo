import Data from "@/data/data";
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
    <section className="" id="engagement">
      <div className="bg-secondary">
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto pt-10 md:pt-20 lg:pt-32 pb-48">
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
