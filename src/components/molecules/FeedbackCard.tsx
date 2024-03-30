interface Props {
  icon: string;
  title: string;
  subtitle: string;
  text: string;
}

const FeedbackCard = ({ icon, title, subtitle, text }: Props) => {
  return (
    <div className="p-4 lg:p-10 border border-accent-light rounded-xl min-h-60 md:min-h-80 flex flex-col justify-start shadow">
      <div className="flex gap-4 lg:gap-8">
        <div className="w-10 md:w-14 h-10 md:h-14 bg-accent-light rounded-full font-serif text-lg md:text-2xl font-semibold text-white flex justify-center items-center flex-shrink-0">
          {icon}
        </div>
        <div className="">
          <h3 className="font-serif text-lg md:text-2xl font-semibold">
            {title}
          </h3>
          <p className=" text-sm md:text-base font-light">{subtitle}</p>
        </div>
      </div>
      <p className="pt-4 text-accent-text text-base md:text-xl font-light">
        “{text}“
      </p>
    </div>
  );
};

export default FeedbackCard;
