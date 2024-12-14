"use client";
import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import { navItems } from "../navItems/navItems";
const Menu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative md:hidden">
      <Dropdown
        isOpen={showDropdown}
        setIsOpen={setShowDropdown}
        items={navItems}
        handleToggle={() => {
          setShowDropdown((prevValue) => !prevValue);
        }}
        handleCloseMenu={() => {
          setShowDropdown(false);
        }}
      />
    </div>
  );
};

export default Menu;
