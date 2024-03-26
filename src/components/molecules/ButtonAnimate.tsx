import ChevronRightIcon from "../icons/ChevronRightIcon";
import SVGIcon from "../icons/SVGIcon";

interface Props {
  text: string;
}
const ButtonAnimate = ({ text }: Props) => {
  return (
    <button className="bg-secondary text-main-text text-20 px-6 py-3 rounded-full flex gap-2 items-center my-8">
      <div className="bg-meshllo w-7 h-7 rounded-full flex justify-center items-center">
        <SVGIcon icon={ChevronRightIcon} size={12} pathClassName="text-white" />
      </div>
      {text}
      {/* Let’s Connect */}
    </button>
  );
};

export default ButtonAnimate;
