import ChevronRightIcon from "../icons/ChevronRightIcon";
import QuotationIcon from "../icons/QuotationIcon";
import SVGIcon from "../icons/SVGIcon";

const Hero = () => {
  return (
    <div className=" pt-12 max-w-430 mx-auto px-2">
      <div className="bg-primary border border-main-text rounded-2xl px-24 pt-36 flex gap-4">
        <div className="text-white">
          <div className=" max-w-3.5xl pb-10">
            <h3 className="h3-64">
              Ready to take your
              <span className=" text-accent"> Business Growth </span> to the
              next level by digitalize your system?
            </h3>
            <p className=" text-20 py-10">
              We are a
              <span className=" text-tertiary">
                Global IT Consultant Agency
              </span>
              who build high end digital product for Mobile & Web platform with
              best user experience and latest technology. Lets innovate and grow
              together.
            </p>
            <button className="bg-secondary text-main-text text-20 px-6 py-3 rounded-full flex gap-2 items-center my-8">
              <div className="bg-meshllo w-7 h-7 rounded-full flex justify-center items-center">
                <SVGIcon
                  icon={ChevronRightIcon}
                  size={12}
                  pathClassName="text-white"
                />
              </div>
              Let’s Connect
            </button>
          </div>
        </div>
        <div>images</div>
      </div>
    </div>
  );
};

export default Hero;
