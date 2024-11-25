import Logo from "../elements/logo/Logo";
import Container from "../elements/container/Container";
import Navbar from "./components/navbar/Navbar";
import HeaderButton from "../Elements/Buttons/HeaderButton";

const Header = () => {
  return (
    <div className="bg-primary">
      <Container>
        <div className="flex items-center text-white justify-between h-[70px] lg:h-[90px] py-2 text-sm">
          <Logo />
          <Navbar />
          <div className="hidden md:block">
            <HeaderButton text="header button" path="/" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
