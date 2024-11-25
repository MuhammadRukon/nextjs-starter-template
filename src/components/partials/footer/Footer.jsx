import Container from "../elements/container/Container";

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <div className=" py-4 border-t border-secondary">
        <Container>
          <div className="text-xs lg:text-sm flex justify-between">
            <p>All rights reserved.</p>
            <p>Made with 💔 by You Know Who</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
