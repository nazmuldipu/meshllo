import parse from "html-react-parser";
interface Props {
  title: string;
  subtitle: string;
  details?: string;
  textAlignment?: "left" | "center" | "right";
}
const SectionHeader = ({
  title,
  subtitle,
  details,
  textAlignment = "center",
}: Props) => {
  const getTextAlignment = (alignment: string) => {
    switch (alignment) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-center";
    }
  };
  return (
    <div className=" max-w-4xl mx-auto">
      <div className="flex flex-col items-center max-w-3xl mx-auto pb-2 md:pb-4 lg:pb-8">
        <h3
          className={`${getTextAlignment(
            textAlignment
          )} w-full font-serif text-lg md:text-2xl lg:text-3xl font-semibold text-accent`}
        >
          {subtitle}
        </h3>
        <h2
          className={`font-serif font-semibold ${getTextAlignment(
            textAlignment
          )} w-full text-2xl md:text-4xl lg:text-5xl xl:text-6.5xl pt-2 md:pt-4 lg:pt-6 !leading-snug`}
        >
          {parse(title)}
        </h2>

        {details && (
          <p
            className={`font-sans ${getTextAlignment(
              textAlignment
            )} text-sm md:text-xl pt-4 md:pt-6 lg:pt-8`}
          >
            {details}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
