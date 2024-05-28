import Data from "@/data/data";
import Image from "next/image";
import styles from "@/styles/styles.module.css";
import ContentWrapper from "../molecules/ContentWrapper";
import Link from "next/link";
import parse from "html-react-parser";

const Footer = () => {
  const data = Data.footer;
  const contact = Data.contact;
  const nav = Data.navbar;
  return (
    <>
      <div className="relative h-48 md:h-64 lg:h-72 xl:h-92.5">
        <div className="w-full h-full bg-background">
          <Image
            className="w-full h-full opacity-10"
            src="/engagement_3.jpg"
            alt="Hero Image 3"
            style={{ objectFit: "cover" }}
            width={1920}
            height={370}
          />
        </div>

        <div className="absolute top-0 w-full h-full text-white ">
          <div className="flex h-full flex-col items-center justify-center text-center px-2 py-10 md:py-24">
            <h3 className={`${styles["meshllo__title"]} pb-2 text-gradient`}>
              {data.title}
            </h3>
            <div className={styles["meshllo__regular-text"]}>
              <span className="font-sans">
                {data.subtitle}{" "}
                <Link
                  href={`mailto:${contact.email}`}
                  className="text-tertiary text-meshllo"
                >
                  {contact.email}
                </Link>{" "}
                or{" "}
                <Link
                  href={`https://wa.me/${contact.phone}`}
                  className="text-tertiary text-meshllo"
                >
                  WhatsApp
                </Link>
                {data.dialog}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-meshllo h-px" />
      <div className="bg-background text-white font-sans">
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div className="flex justify-between py-4 px-2">
            <div className="text-center">{data.copyright}</div>
            <div className="hidden md:block">
              <ul className="flex gap-4">
                {data.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className=" text-white text-meshllo">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
