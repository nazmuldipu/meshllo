import Data from "@/data/data";
import SectionHeader from "../molecules/SectionHeader";
import ServiceCard from "../molecules/ServiceCard";
import CustomSoftwareIcon from "../icons/CustomSoftwareIcon";
import CloudIcon from "../icons/CloudIcon";
import MobileAppIcon from "../icons/MobileAppIcon";
import WebAppIcon from "../icons/WebAppIcon";
import WebsiteIcon from "../icons/WebsiteIcon";
import UXIcon from "../icons/UXIcon";
import UIIcon from "../icons/UIIcon";
import DevOpsIcon from "../icons/DevOpsIcon";
import SQAICon from "../icons/SQAIcon";
import GraphicsDesignIcon from "../icons/GraphicsDesignIcon";
import DigitalMarketingIcon from "../icons/DigitalMarketingIcon";
import ItConsultantIcon from "../icons/ItConsultantIcon";

const Services = () => {
  const data = Data.services;

  const getIcon = (icon: string): React.ElementType => {
    switch (icon) {
      case "custom-software":
        return CustomSoftwareIcon;
      case "cloud":
        return CloudIcon;
      case "mobile-app":
        return MobileAppIcon;
      case "web-app":
        return WebAppIcon;
      case "web-site":
        return WebsiteIcon;
      case "ux":
        return UXIcon;
      case "ui":
        return UIIcon;
      case "dev-ops":
        return DevOpsIcon;
      case "sqa":
        return SQAICon;
      case "graphics-design":
        return GraphicsDesignIcon;
      case "digital-marketing":
        return DigitalMarketingIcon;
      case "it-consultant":
        return ItConsultantIcon;

      default:
        return ItConsultantIcon;
    }
  };
  return (
    <section className="px-4">
      <div className="bg-white">
        <div className="max-w-screen-md xl:max-w-screen-2xl mx-auto pt-10 md:pt-20 lg:pt-32 pb-24">
          <SectionHeader
            details={data.details}
            title={data.title}
            subtitle={data.subtitle}
          />
          <div className="flex flex-wrap gap-8 justify-center py-20">
            {data.content.data.map((item, index) => (
              <ServiceCard
                key={item.text}
                title={item.title}
                text={item.text}
                icon={getIcon(item.icon)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
