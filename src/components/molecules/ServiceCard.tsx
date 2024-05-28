import Link from "next/link";
// import CustomSoftwareIcon from "../icons/CustomSoftwareIcon";
import QuotationIcon from "../icons/QuotationIcon";
import SVGIcon from "../icons/SVGIcon";

interface Props {
  title: string;
  text: string;
  icon: React.ElementType;
}
const ServiceCard = ({ title, text, icon }: Props) => {
  return (
    <div className="service-card group/service-card box">
      <div className="flex">
        <div className="flex h-12 md:h-20">
          <span className="hidden md:inline-block">
            <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center group-hover/service-card:hidden">
              <SVGIcon icon={icon} size={50} pathClassName="text-white" />
            </div>
          </span>
          <span className="md:hidden">
            <div className="bg-meshllo w-12 h-12 rounded-full flex justify-center items-center md:group-hover/service-card:hidden">
              <SVGIcon icon={icon} size={30} pathClassName="text-white" />
            </div>
          </span>
          <Link href="#contact" className="quotation-box">
            <div className="rounded-full flex justify-center items-center gap-2 font-sans">
              <SVGIcon
                icon={QuotationIcon}
                size={28}
                pathClassName="text-white"
              />
              <span className="text-gradient text-xl font-medium">
                Want Quotation?
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="pt-4 md:pt-7">
        <h6 className="h6-24 sm:h-14 md:h-16 text-primary md:group-hover/service-card:text-white">
          {title}
        </h6>
        <div className="text-18 pt-4">{text}</div>
        <div className="md:hidden w-full pt-5 pb-3">
          <Link
            href="#contact"
            className="flex justify-center items-center px-4 py-2 bg-accent hover:bg-primary  text-white font-sans font-light rounded-full"
          >
            Want Quotation?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
