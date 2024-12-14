import Link from "next/link";
import React from "react";

const HeaderButton = ({ text, path }) => {
  return (
    <Link
      href={`${path}`}
      className="bg-secondary rounded-md px-4 lg:px-6 py-1.5 lg:py-2 text-xs md:text-sm lg:text-base text-nowrap hidden md:block"
    >
      {text}
    </Link>
  );
};

export default HeaderButton;
