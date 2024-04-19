import Link from "next/link";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import SVGIcon from "../icons/SVGIcon";

interface Props {
  text: string;
  href?: string;
  target?: string;
}
const ButtonAnimate = ({
  text,
  href = "#contact",
  target = "_parent",
}: Props) => {
  return (
    <Link
      href={href}
      target={target}
      className="bg-secondary text-main-text text-xl font-medium font-sans px-6 py-3 rounded-full flex gap-2 items-center my-8 w-max"
    >
      <div className="bg-meshllo w-7 h-7 rounded-full flex justify-center items-center">
        <SVGIcon icon={ChevronRightIcon} size={12} pathClassName="text-white" />
      </div>
      <span className="text-meshllo">{text}</span>
    </Link>
  );
};

export default ButtonAnimate;
