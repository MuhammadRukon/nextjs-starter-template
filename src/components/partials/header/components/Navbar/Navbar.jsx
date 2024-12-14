"use client";
import { usePathname } from "next/navigation";
import { LinkItem, navItems } from "../navItems/navItems";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex items-center gap-8 lg:gap-10 col-span-3 justify-self-center">
      {navItems.map((item) => (
        <LinkItem
          key={item.id}
          href={item.href}
          label={item.label}
          isActive={pathname === item.href}
        />
      ))}
    </div>
  );
};

export default Navbar;
