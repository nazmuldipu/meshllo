import { ReactNode } from "react";

interface Props {
  background?: string;
  className?: string;
  children: ReactNode;
}
const ContentWrapper = ({
  background = "bg-white",
  children,
  className = "pt-10 md:pt-20 lg:pt-32 pb-24",
}: Props) => {
  return (
    <section className={`${background}`}>
      <div
        className={`md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-4 md:mx-auto ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default ContentWrapper;