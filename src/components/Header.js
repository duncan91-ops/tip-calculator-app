import Wrapper from "../assets/wrappers/Header";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt="Tip Calculator Logo" />
    </Wrapper>
  );
};

export default Header;
