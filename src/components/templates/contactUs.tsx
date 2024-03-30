import Data from "@/data/data";
import ContentWrapper from "../molecules/ContentWrapper";
import SectionHeader from "../molecules/SectionHeader";
import SVGIcon from "../icons/SVGIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import LocationIcon from "../icons/LocationIcon";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LogoIcon from "../icons/LogoIcon";

const ContactUs = () => {
  const data = Data.contactUs;

  const getIcon = (icon: string) => {
    switch (icon) {
      case "email":
        return EmailIcon;
      case "phone":
        return PhoneIcon;
      case "location":
        return LocationIcon;
      case "facebook":
        return FacebookIcon;
      case "linkedin":
        return LinkedinIcon;
      case "instagram":
        return InstagramIcon;
      default:
        return LocationIcon;
    }
  };

  return (
    <ContentWrapper
      background="bg-secondary text-main-text font-sans"
      className=" py-28"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="">
          <div className="pb-4 border-b border-border">
            <SectionHeader
              title={data.title}
              subtitle={data.subtitle}
              textAlignment="left"
            />
          </div>
          <div className="py-10 border-b border-border">
            {data.content.data.map((item, index) => (
              <div key={item.text} className="flex gap-6 py-4">
                <div className="bg-meshllo w-12 h-12 rounded-full flex justify-center items-center">
                  <SVGIcon
                    icon={getIcon(item.icon)}
                    size={25}
                    pathClassName="text-white"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold">
                    {item.title}
                  </h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="py-10">
            <h4 className="w-full font-serif text-lg md:text-2xl font-semibold">
              Find Us On
            </h4>
            <div className="flex gap-4 pt-8">
              {data.content.socials.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <SVGIcon
                    icon={getIcon(item.icon)}
                    size={50}
                    pathClassName="text-white"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <form
          action=""
          className="bg-white rounded-2xl p-10 text-main-text font-light"
        >
          <SVGIcon
            icon={LogoIcon}
            height={48}
            width={220}
            pathClassName="text-secondary-text"
          />
          <div className="grid md:grid-cols-2 gap-14 py-10">
            {data.form.map((item, index) => (
              <div
                key={item.name}
                className={`${
                  item.type === "select" || item.type === "textarea"
                    ? "col-span-2"
                    : ""
                }`}
              >
                <label
                  htmlFor="first-name"
                  className="block text-lg leading-5 "
                >
                  {item.label}
                </label>
                <div className="mt-2">
                  {(item.type === "text" ||
                    item.type === "email" ||
                    item.type === "phone") && (
                    <input
                      type="text"
                      name={item.name}
                      id={item.name}
                      className="block w-full border-b py-2 text-accent-text"
                    />
                  )}
                  {item.type === "select" && (
                    <select className="block w-full border-b py-2 text-accent-text">
                      {item.options?.map((option, index) => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                  )}
                  {item.type === "textarea" && (
                    <textarea
                      className="block w-full border-b p-2 text-accent-text"
                      rows={2}
                      style={{ resize: "none" }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            className="bg-meshllo text-lg text-white py-3 px-6 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </ContentWrapper>
  );
};

export default ContactUs;
