import styles from "@/styles/styles.module.css";

const SubscribeForm = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 text-center lg:text-left">
      <h5 className={`${styles["meshllo__regular-text"]} !font-bold`}>
        Subscribe for latest update
      </h5>
      <form className="relative">
        <input
          type="email"
          id="subscribe-email"
          className="w-full min-w-min p-2 md:p-3 xl:p-4 !pr-32 md:!pr-36 xl:pr-44 ps-6 text-base md:text-lg text-gray-900  rounded-full bg-white "
          placeholder="Enter your email here"
          required
        />
        <button
          type="submit"
          className="text-white absolute end-1.5 xl:end-2.5 bottom-1 xl:bottom-2 bg-meshllo hover:scale-105 transition-all font-normal tracking-wider rounded-full text-base md:text-lg xl:text-xl px-4 py-1 md:py-2"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
