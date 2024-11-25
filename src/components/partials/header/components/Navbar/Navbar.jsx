"use client";
import { usePathname } from "next/navigation";
import Menu from "../menu/Menu";
import { LinkItem, navItems } from "../navItems/navItems";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navItems.map((item) => (
          <LinkItem
            key={item.id}
            href={item.href}
            label={item.label}
            isActive={pathname === item.href}
          />
        ))}
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </>
  );
};

export default Navbar;
