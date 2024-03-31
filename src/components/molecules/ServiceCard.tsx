import Link from "next/link";
import CustomSoftwareIcon from "../icons/CustomSoftwareIcon";
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
        <span className="hidden md:inline-block">
          <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center group-hover/service-card:hidden">
            <SVGIcon icon={icon} size={50} pathClassName="text-white" />
          </div>
        </span>
        <span className="md:hidden">
          <div className="bg-meshllo w-12 h-12 rounded-full flex justify-center items-center group-hover/service-card:hidden">
            <SVGIcon icon={icon} size={30} pathClassName="text-white" />
          </div>
        </span>
        <Link href="#contact" className="quotation-box">
          {/* <div > */}
          <div className="rounded-full flex justify-center items-center">
            <SVGIcon
              icon={QuotationIcon}
              size={50}
              pathClassName="text-white"
            />
            {/* </div> */}
            Want Quotation?
          </div>
        </Link>
      </div>
      <div className="pt-4 md:pt-7">
        <h6 className="h6-24 text-primary group-hover/service-card:text-white">
          {title}
        </h6>
        <div className="text-18 pt-4">{text}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
