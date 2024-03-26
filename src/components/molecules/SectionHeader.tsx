interface Props {
  title: string;
  subtitle: string;
  details?: string;
}
const SectionHeader = ({ title, subtitle, details }: Props) => {
  return (
    <div className=" max-w-4xl mx-auto">
      <div className="flex flex-col items-center max-w-3xl mx-auto pb-8 md:pb-12 lg:pb-16">
        <h3 className="font-serif text-lg md:text-2xl lg:text-3xl font-semibold text-accent">
          {subtitle}
        </h3>
        <h2 className="font-serif font-semibold text-center text-2xl md:text-4xl lg:text-6xl pt-2 md:pt-4 lg:pt-6">
          {title}
        </h2>
      </div>
      {details && (
        <p className="font-sans text-center text-sm md:text-base pt-4 md:pt-6 lg:pt-8">
          {details}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
