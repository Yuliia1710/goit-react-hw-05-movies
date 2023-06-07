import styled from '@emotion/styled';
import { Container } from 'components/App.styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background-color: brown;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledContainer = styled(Container)`
  display: flex;
`;

export const Img = styled.img`
  width: 200px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-left: 30px;
  font-size: 25px;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: orange;
    font-weight: bold;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;
