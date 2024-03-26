import Image from "next/image";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import SVGIcon from "../icons/SVGIcon";
import style from "@/styles/styles.module.css";
import ButtonAnimate from "../molecules/ButtonAnimate";

const Hero = () => {
  return (
    <div className=" pt-8 max-w-430 mx-auto px-2 pb-4 md:pb-20">
      <div className={style["meshllo__hero-template"]}>
        <div className={style["meshllo__hero-content"]}>
          <h3 className={style["meshllo__hero-main-text"]}>
            Ready to take your
            <span className="text-accent"> Business Growth </span> to the next
            level by digitalize your system?
          </h3>
          <p className=" md:text-20 py-10">
            We are a
            <span className=" text-tertiary">Global IT Consultant Agency</span>
            who build high end digital product for Mobile & Web platform with
            best user experience and latest technology. Lets innovate and grow
            together.
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
            className=" rounded-3xl opacity-30 absolute top-0 left-0"
            src="/hero_3.jpg"
            alt="Hero Image 3"
            width={500}
            height={500}
          />
          <Image
            className=" rounded-3xl opacity-50 absolute top-10 left-10"
            src="/hero_2.jpg"
            alt="Hero Image 3"
            width={500}
            height={500}
          />
          <Image
            className=" rounded-3xl absolute top-20 left-20"
            src="/hero_1.jpg"
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
