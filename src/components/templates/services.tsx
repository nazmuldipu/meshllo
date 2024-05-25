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
import UiUxIcon from "../icons/UiUxIcon";
import DevOpsIcon from "../icons/DevOpsIcon";
import SQAICon from "../icons/SQAIcon";
import GraphicsDesignIcon from "../icons/GraphicsDesignIcon";
import DigitalMarketingIcon from "../icons/DigitalMarketingIcon";
import ItConsultantIcon from "../icons/ItConsultantIcon";
import SVGIcon from "../icons/SVGIcon";
import DiscoverIcon from "../icons/DiscoverIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import DesignIcon from "../icons/DesignIcon";
import DevelopIcon from "../icons/DevelopIcon";
import DeployIcon from "../icons/DeployIcon";

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
      case "ui-ux":
        return UiUxIcon;
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
      case "discover":
        return DiscoverIcon;
      case "arrow":
        return RightArrowIcon;
      case "design":
        return DesignIcon;
      case "develop":
        return DevelopIcon;
      case "deploy":
        return DeployIcon;

      default:
        return ItConsultantIcon;
    }
  };
  return (
    <section className="px-4" id="services">
      <div className="bg-white pt-12 md:pt-0">
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto py-16 md:py-24 lg:py-32 xl:py-36">
          <SectionHeader
            details={data.details}
            detailsTextColor="text-accent-text pb-8"
            title={data.title}
            subtitle={data.subtitle}
          />
          <div className=" max-w-5xl mx-auto flex justify-between items-center py-20">
            {data.flow.map((item, index) => (
              <div className="grid gap-6" key={`service-flow-${index}`}>
                <SVGIcon
                  icon={getIcon(item.icon)}
                  size={item.icon === "arrow" ? 32 : 80}
                />
                <div className=" font-sans text-accent-text text-center">
                  {item.text ?? ""}
                </div>
              </div>
            ))}
          </div>
          <div className="service-container">
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
