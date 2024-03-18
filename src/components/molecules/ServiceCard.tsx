import CustomSoftwareIcon from "../icons/CustomSoftwareIcon";
import QuotationIcon from "../icons/QuotationIcon";
import SVGIcon from "../icons/SVGIcon";

const ServiceCard = () => {
  return (
    <div className="service-card group/service-card box">
      <div className="flex">
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center group-hover/service-card:hidden">
          <SVGIcon
            icon={CustomSoftwareIcon}
            size={50}
            pathClassName="text-white"
          />
        </div>
        <div className="quotation-box">
          <div className="rounded-full flex justify-center items-center">
            <SVGIcon
              icon={QuotationIcon}
              size={50}
              pathClassName="text-white"
            />
          </div>
          Want Quotation?
        </div>
      </div>
      <div className="pt-7">
        <h6 className="h6-24 text-primary group-hover/service-card:text-white">
          Custom Software Development
        </h6>
        <div className="text-18">
          Unlock the power of visual storytelling with our expert graphic design
          services tailored to elevate your brand and captivate.
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
