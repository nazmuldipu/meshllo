import Data from "@/data/data";
import styles from "@/styles/styles.module.css";
import ContentWrapper from "../molecules/ContentWrapper";
import Link from "next/link";
import SubscribeForm from "../molecules/subscribeForm";

const Footer = () => {
  const data = Data.footer;
  const contact = Data.contact;
  const nav = Data.navbar;
  return (
    <ContentWrapper
      background="bg-primary text-white font-sans"
      className="pt-10 md:pt-16 lg:pt-20 pb-4 "
    >
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-1 pb-6 border-b">
        <div className="text-center lg:text-left">
          <h3 className={`${styles["meshllo__title"]} pb-2`}>{data.title}</h3>
          <div className={styles["meshllo__regular-text"]}>
            <span>
              {data.subtitle}{" "}
              <Link href={`mailto:${contact.email}`} className=" text-accent">
                {contact.email}
              </Link>
              <br />
              or{" "}
              <Link
                href={`https://wa.me/${contact.phone}`}
                className=" text-accent"
              >
                WhatsApp
              </Link>
              {data.dialog}
            </span>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <SubscribeForm />
        </div>
      </div>
      <div className="flex justify-between py-4">
        <div className="text-center">{data.copyright}</div>
        <div className="hidden md:block">
          <ul className="flex gap-4">
            {nav.links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className=" text-white hover:text-accent"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Footer;
