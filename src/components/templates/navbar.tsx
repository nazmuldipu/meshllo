import Link from "next/link";
import LogoIcon from "../icons/LogoIcon";
import SVGIcon from "../icons/SVGIcon";

const Navbar = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 pt-10 pb-4 flex justify-between body-rg-20">
        <SVGIcon icon={LogoIcon} width={212} height={48} />
        <div className="flex">
          <Link
            href="/"
            className=" font-normal px-5 py-2 flex gap-2 items-center border-b-3 border-transparent hover:bg-main-hover transition ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/"
            className=" font-normal px-5 py-2 flex gap-2 items-center border-b-3 border-transparent hover:bg-main-hover transition ease-in-out"
          >
            Services
          </Link>
          <Link
            href="/"
            className=" font-normal px-5 py-2 flex gap-2 items-center border-b-3 border-transparent hover:bg-main-hover transition ease-in-out"
          >
            About
          </Link>
        </div>
        <Link
          href="/"
          className=" font-normal px-5 py-2 flex gap-2 items-center border-b-3 border-transparent hover:bg-main-hover transition ease-in-out"
        >
          Contact Us
        </Link>
      </div>
      {/* <ThemeButton /> */}
    </div>
  );
};

export default Navbar;
