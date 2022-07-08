import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav>
      <Link to="/">My Palette</Link>
      <Link to="trending-palettes">Trending Palettes</Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
const Link = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  &.active {
    border-bottom: 3px solid;
  }
`;
