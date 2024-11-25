import Logo from "../elements/logo/Logo";
import Container from "../elements/container/Container";
import Navbar from "./components/navbar/Navbar";
import HeaderButton from "../Elements/Buttons/HeaderButton";

const Header = ({
  showMenu = true,
  showButton = true,
  buttonText = "header button",
  buttonPath = "/",
}) => {
  return (
    <div className="bg-primary">
      <Container>
        <div className="flex items-center text-white justify-between h-[70px] lg:h-[90px] py-2 text-sm">
          <Logo />
          {showMenu && <Navbar />}
          {showButton && (
            <div className="hidden md:block">
              <HeaderButton text={buttonText} path={buttonPath} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
