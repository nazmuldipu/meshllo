import { useRef } from "react";
import Data from "@/data/data";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import ContentWrapper from "../molecules/ContentWrapper";
import SectionHeader from "../molecules/SectionHeader";

import FeedbackCard from "../molecules/FeedbackCard";
import SVGIcon from "../icons/SVGIcon";
import RightIcon from "../icons/RightIcon";
import LeftIcon from "../icons/LeftIcon";

const Feedback = () => {
  const data = Data.feedback;
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <ContentWrapper
      background="bg-white text-main-text font-sans"
      className="py-10 md:py-16 lg:py-20 "
      id="feedback"
    >
      <SectionHeader
        title={data.title}
        subtitle={data.subtitle}
        details={data.details}
        textAlignment="center"
      />
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        slidesPerView={6}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={16}
        loop={true}
        className="mySwiper"
      >
        {data.content.data.map((item, index) => (
          <SwiperSlide key={item.title} className="p-2">
            <FeedbackCard
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              text={item.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-8 text-white pt-8">
        <button className="prev bg-tertiary rounded-sm p-4">
          <SVGIcon
            icon={LeftIcon}
            width={27}
            height={10}
            pathClassName="text-white"
          />
        </button>
        <button className="next bg-tertiary rounded-sm p-4">
          <SVGIcon
            icon={RightIcon}
            width={27}
            height={10}
            pathClassName="text-white"
          />
        </button>
      </div>
    </ContentWrapper>
  );
};

export default Feedback;
