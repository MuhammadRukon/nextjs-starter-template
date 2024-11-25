import { CgMenuRightAlt } from "react-icons/cg";
import { LinkItem } from "../navItems/navItems";
import HeaderButton from "@/components/partials/elements/buttons/HeaderButton";
const Dropdown = ({ isOpen, handleToggle, handleCloseMenu, items }) => {
  return (
    <div className="p-2 my-3 rounded-lg text-xs cursor-pointer">
      <button onClick={handleToggle}>
        <CgMenuRightAlt size={24} />
      </button>
      <div
        className={`absolute top-14 flex flex-col right-0 font-light transition-all overflow-hidden p-5 text-base  bg-tertiary backdrop-blur-xl rounded-lg text-center w-[250px] space-y-4 min-w-[250px] duration-200 ${
          isOpen ? "h-[200px] min-h-fit z-50 opacity-100 " : "h-0 opacity-0"
        }`}
      >
        {items.map((item) => (
          <LinkItem
            href={item.href}
            label={item.label}
            handleClose={handleCloseMenu}
            key={item.id}
          />
        ))}
        <HeaderButton text="header button" path="/" />
      </div>
    </div>
  );
};

export default Dropdown;
