import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const LargeButton = ({ text }) => {
  const buttonClasses = `w-fit group flex gap-4 hover:gap-8 md:gap-8 lg:gap-12 md:hover:gap-12 lg:hover:gap-16 text-lg lg:text-xl font-normal cursor-pointer items-center md:pl-8 md:hover:pl-12 lg:pl-10 lg:hover:pl-14 pl-6 hover:pl-10 pr-1.5 py-1.5 md:pr-2 md:py-2 text-nowrap bg-tertiary transition-all duration-300 rounded-full`;

  return (
    <Link href={"/apply"} className={buttonClasses}>
      {text}
      <div className="px-4 py-1 md:px-6 md:py-1.5 md:group-hover:px-8 lg:px-10 lg:py-3 lg:group-hover:px-12 rounded-full bg-secondary transition-all duration-300">
        <GoArrowRight size={40} />
      </div>
    </Link>
  );
};

export default LargeButton;
