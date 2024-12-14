import Link from "next/link";

export const navItems = [
  { id: 1, href: "/menu-item-1", label: "Menu item 1" },
  { id: 2, href: "/menu-item-2", label: "Menu item 2" },
  { id: 3, href: "/menu-item-3", label: "Menu item 3" },
  { id: 4, href: "/menu-item-4", label: "Menu item 4" },
  { id: 5, href: "/contact", label: "Contact Us" },
];

export const LinkItem = ({ href, label, isActive, handleClose }) => (
  <Link
    href={href}
    onClick={handleClose}
    aria-label={label}
    className={`relative text-nowrap md:py-2 text-xs lg:text-sm
      after:bg-secondary after:transition-all after:duration-300 
      after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[0.125rem] ${
        isActive ? "after:w-[80%]" : "after:w-[0%]"
      }`}
  >
    {label}
  </Link>
);
