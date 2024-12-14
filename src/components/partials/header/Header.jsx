import Logo from "../../elements/logo/Logo";
import Container from "../../elements/container/Container";
import Navbar from "./components/navbar/Navbar";
import HeaderButton from "../../elements/Buttons/HeaderButton";
import Menu from "./components/menu/Menu";

const Header = () => {
  return (
    <div className="bg-primary">
      <Container>
        <div className="grid grid-cols-5 items-center text-white justify-between py-1 text-sm">
          <Logo />
          <Navbar />
          <div className="col-start-5 col-span-1 justify-self-end">
            <HeaderButton text={"CTA"} path={"/"} />
            <Menu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
