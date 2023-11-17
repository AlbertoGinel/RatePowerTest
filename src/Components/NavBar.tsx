import { StyledNavBar, NavBarLink } from "./styles/NavBar.styled";

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavBarLink to="/planets" className="title">
        PlanetsApp
      </NavBarLink>
      <NavBarLink to="/planets">Planets</NavBarLink>
      <NavBarLink to="/favorites">Favorites</NavBarLink>
    </StyledNavBar>
  );
};

export default NavBar;
