import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 200px;
  height: 100%;
  padding: 20px;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const NavBarLink = styled(Link)`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 400;
  padding-left: 24px;
  font-size: 14px;
  text-decoration: none;
  padding: 12px 0 12px 24px;

  &.title {
    font-weight: 800;
    font-size: 22px;
    padding: 17px 0 17px 24px;
  }
`;
