import styled from "styled-components";
import icon from "../images/Icon.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #29aae1;
  color: #fffff;
`;

const NavLinks = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavLink = styled.li`
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

const AppIcon = styled.img`
  height: 50px;
  margin-right: 16px;
`;

const LoginButton = styled(Link)`
  padding: 10px;
  border-radius: 5px;
  background-color: #0077cc;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const TopMenu = () => {
  return (
    <Container>
      <div>
        <AppIcon src={icon} alt="App Icon" />
      </div>
      <nav>
        <NavLinks>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/products">Products</Link>
          </NavLink>
        </NavLinks>
      </nav>
      <LoginButton to="/auth/login">Login</LoginButton>
    </Container>
  );
};

export default TopMenu;
