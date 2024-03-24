interface Props {
  title: string;
  subtitle: string;
}
const SectionHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto pb-8 md:pb-12 lg:pb-16">
      <h3 className="font-serif text-lg md:text-2xl lg:text-3xl font-semibold text-accent">
        {subtitle}
      </h3>
      <h2 className="font-serif font-semibold text-2xl md:text-4xl lg:text-6xl pt-2 md:pt-4 lg:pt-6">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
