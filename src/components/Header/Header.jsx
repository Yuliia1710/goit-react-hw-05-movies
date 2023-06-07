import { Link } from 'react-router-dom';

import {
  HeaderStyled,
  StyledContainer,
  Img,
  StyledNavLink,
  Nav,
} from './Header.styled';
import ImgLogo from '../../images/logo.png';

const Header = () => {
  return (
    <HeaderStyled>
      <StyledContainer>
        <Link to="/">
          <Img src={ImgLogo} />
        </Link>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </StyledContainer>
    </HeaderStyled>
  );
};

export default Header;
