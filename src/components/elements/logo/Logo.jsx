import Image from "next/image";
import Link from "next/link";
const Logo = ({ logo }) => {
  return (
    <Link href="/" className="col-span-1">
      <Image
        className="w-16 lg:w-20 p-3"
        src={logo || "/logo.png"}
        alt="logo"
        width={200}
        height={200}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
