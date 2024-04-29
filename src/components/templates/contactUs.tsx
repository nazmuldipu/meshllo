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

  const access_key = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;
  const replyto = process.env.NEXT_PUBLIC_FORM_REPLY_TO;
  const redirect = process.env.NEXT_PUBLIC_FORM_REDIRECT_URL;

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
      className="py-12 md:py-28"
      id="contact"
    >
      <div className="grid lg:grid-cols-5 xl:grid-cols-2 gap-8">
        <div className="order-2 md:order-1 lg:col-span-2 xl:col-span-1">
          <div className="pb-4 border-b border-border">
            <SectionHeader
              title={data.title}
              subtitle={data.subtitle}
              textAlignment="left"
            />
          </div>
          <div className="py-6 md:py-10 border-b border-border">
            {data.content.data.map((item, index) => (
              <div key={item.text} className="flex gap-6 py-3 md:py-4">
                <div className="bg-meshllo w-12 h-12 rounded-full flex justify-center items-center shrink-0">
                  <SVGIcon
                    icon={getIcon(item.icon)}
                    size={25}
                    pathClassName="text-white"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-serif font-bold">
                    {item.title}
                  </h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="py-6 md:py-10">
            <h4 className="w-full font-serif text-lg md:text-2xl font-semibold">
              Find Us On
            </h4>
            <div className="flex gap-4 pt-4 md:pt-8">
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
          action="https://api.web3forms.com/submit"
          method="POST"
          className="order-1 md:order-2 bg-white rounded-2xl p-4 md:p-10 text-main-text font-light lg:col-span-3 xl:col-span-1"
        >
          <SVGIcon
            icon={LogoIcon}
            height={48}
            width={220}
            pathClassName="text-secondary-text"
          />
          <input type="hidden" name="access_key" value={access_key} />
          <input
            type="hidden"
            name="subject"
            value="New Contact Form Submission"
          />
          <input type="hidden" name="from_name" value="Meshllo contact form" />
          <input type="hidden" name="replyto" value={replyto} />
          <input
            type="checkbox"
            name="botcheck"
            id=""
            style={{ display: "none" }}
          />
          <input type="hidden" name="redirect" value={redirect} />
          <div className="grid md:grid-cols-2 gap-4 md:gap-14 py-4 md:py-10">
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
                <div className="">
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
                    <select className="block w-full border-b py-2 text-accent-text bg-white">
                      {item.options?.map((option, index) => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                  )}
                  {item.type === "textarea" && (
                    <textarea
                      name={item.name}
                      id={item.name}
                      className="block w-full border-b p-2 text-accent-text"
                      rows={2}
                      style={{ resize: "none" }}
                    />
                  )}
                </div>
              </div>
            ))}
            <button
              className="bg-meshllo text-xl font-medium font-sans text-white py-3 px-14 rounded-full"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </ContentWrapper>
  );
};

export default ContactUs;
