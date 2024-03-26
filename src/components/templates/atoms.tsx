import CloudIcon from "../icons/CloudIcon";
import CustomSoftwareIcon from "../icons/CustomSoftwareIcon";
import DevOpsIcon from "../icons/DevOpsIcon";
import DigitalMarketingIcon from "../icons/DigitalMarketingIcon";
import GraphicsDesignIcon from "../icons/GraphicsDesignIcon";
import ItConsultantIcon from "../icons/ItConsultantIcon";
import MobileAppIcon from "../icons/MobileAppIcon";
import QuotationIcon from "../icons/QuotationIcon";
import SQAICon from "../icons/SQAIcon";
import SVGIcon from "../icons/SVGIcon";
import UIIcon from "../icons/UIIcon";
import UXIcon from "../icons/UXIcon";
import WebAppIcon from "../icons/WebAppIcon";
import WebsiteIcon from "../icons/WebsiteIcon";
import ServiceCard from "../molecules/ServiceCard";

const Atoms = () => {
  return (
    <div className=" max-w-3xl mx-auto px-4">
      <h3 className="text-center text-3xl font-sans font-bold">Atoms</h3>
      <h3 className="text-left text-xl font-sans font-bold border-b mb-4 border-black">
        Colors
      </h3>
      <div className="flex gap-4 flex-wrap text-secondary">
        <div className="grid text-meshllo">
          <div className="bg-meshllo w-20 h-20  border border-border"></div>
          <div className=" text-main-text text-center text-sm">meshllo</div>
        </div>
        <div className="grid">
          <div className="bg-primary w-20 h-20  border border-border"></div>
          <div className=" text-main-text text-center text-sm">primary</div>
        </div>
        <div className="grid">
          <div className="bg-accent w-20 h-20  border border-border"></div>
          <div className=" text-main-text text-center text-sm">accent</div>
        </div>
        <div className="grid">
          <div className="bg-secondary w-20 h-20  border border-border"></div>
          <div className=" text-main-text text-center text-sm">secondary</div>
        </div>
        <div className="grid">
          <div className="bg-border w-20 h-20  border border-border"></div>
          <div className=" text-main-text text-center text-sm">border</div>
        </div>
        <div className="grid">
          <div className="bg-main-text w-20 h-20  border border-border"></div>
          <div className=" text-main-text text-center text-sm">main-text</div>
        </div>
        <div className="grid">
          <div className="bg-secondary-text w-20 h-20  border border-border"></div>
          <div className=" text-main-text text-center text-sm">
            secondary-text
          </div>
        </div>
        <div className="grid">
          <div className="bg-accent-text w-20 h-20  border border-border"></div>
          <div className=" text-main-text text-center text-sm">accent-text</div>
        </div>
      </div>

      <h3 className="text-left text-xl font-sans font-bold border-b mt-10 mb-4 border-black">
        Components
      </h3>
      <div className="flex gap-4 flex-wrap text-secondary">
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon icon={CloudIcon} size={40} pathClassName="text-white" />
        </div>
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon
            icon={CustomSoftwareIcon}
            size={40}
            pathClassName="text-white"
          />
        </div>
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon icon={SQAICon} size={40} pathClassName="text-white" />
        </div>
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon icon={MobileAppIcon} size={40} pathClassName="text-white" />
        </div>
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon icon={WebsiteIcon} size={40} pathClassName="text-white" />
        </div>
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon icon={WebAppIcon} size={40} pathClassName="text-white" />
        </div>
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon icon={UXIcon} size={40} pathClassName="text-white" />
        </div>
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon
            icon={GraphicsDesignIcon}
            size={40}
            pathClassName="text-white"
          />
        </div>
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon icon={UIIcon} size={40} pathClassName="text-white" />
        </div>
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon icon={DevOpsIcon} size={40} pathClassName="text-white" />
        </div>
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon
            icon={DigitalMarketingIcon}
            size={40}
            pathClassName="text-white"
          />
        </div>
        <div className="bg-meshllo w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon
            icon={ItConsultantIcon}
            size={40}
            pathClassName="text-white"
          />
        </div>
        <div className=" w-20 h-20 rounded-full flex justify-center items-center">
          <SVGIcon icon={QuotationIcon} size={40} pathClassName="text-white" />
        </div>
      </div>
      <h3 className="text-left text-xl font-sans font-bold border-b mt-10 mb-4 border-black">
        Cards
      </h3>
      {/* <ServiceCard /> */}
    </div>
  );
};

export default Atoms;
