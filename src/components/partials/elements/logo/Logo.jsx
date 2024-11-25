import Image from "next/image";
import Link from "next/link";
import DefaultLogo from "/public/logo.png";
const Logo = ({ logo }) => {
  return (
    <Link href="/">
      <Image
        className="w-10 md:w-16 lg:w-20 p-3"
        src={logo || DefaultLogo}
        alt="logo"
        width={200}
        height={200}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
