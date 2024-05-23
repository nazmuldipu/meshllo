import Image from "next/image";
import style from "@/styles/styles.module.css";
import ButtonAnimate from "../molecules/ButtonAnimate";
import Data from "@/data/data";
import parse from "html-react-parser";

const Hero = () => {
  const data = Data.hero;
  return (
    <div
      className="pt-8 md:pt-7 max-w-430 mx-auto pb-4 md:pb-20 lg:pb-32 xl:pb-36"
      id="home"
    >
      <div className={style["meshllo__hero-template"]}>
        <div className={style["meshllo__hero-content"]}>
          <h3 className={style["meshllo__hero-main-text"]}>
            {parse(data.title)}
          </h3>
          <p className="font-sans 2xl:text-1.5xl py-6 max-w-2xl md:max-w-md lg:max-w-xl 2xl:max-w-3xl ">
            {parse(data.dialog)}
          </p>
          <ButtonAnimate text="Let’s Connect" />
          {/* <button className="bg-secondary text-main-text text-20 px-6 py-3 rounded-full flex gap-2 items-center my-8">
            <div className="bg-meshllo w-7 h-7 rounded-full flex justify-center items-center">
              <SVGIcon
                icon={ChevronRightIcon}
                size={12}
                pathClassName="text-white"
              />
            </div>
            Let’s Connect
          </button> */}
        </div>
        <div className={style["meshllo__hero_image"]}>
          <Image
            className="rounded-3xl w-full self-center"
            src="/home.png"
            alt="Hero Image 3"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
