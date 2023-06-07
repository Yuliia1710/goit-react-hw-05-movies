import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieCardContainer = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  /* width: 400px; */
  margin-right: 30px;
`;

export const Img = styled.img`
  width: 400px;
`;

export const StyledGoBack = styled(NavLink)`
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
  color: #212121;

  :hover {
    color: brown;
  }
`;

export const StyledGoBackContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
  color: #212121;
  margin-right: 50px;

  :hover {
    color: brown;
  }
`;
