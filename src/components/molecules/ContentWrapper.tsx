import { ReactNode } from "react";

interface Props {
  background?: string;
  className?: string;
  children: ReactNode;
  id?: string;
}
const ContentWrapper = ({
  background = "bg-white",
  children,
  className = "pt-10 md:pt-20 lg:pt-32 pb-24",
  id = "",
}: Props) => {
  return (
    <section className={`${background}`} id={id}>
      <div
        className={`max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-16 md:py-24 lg:py-32 xl:py-36 ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default ContentWrapper;
