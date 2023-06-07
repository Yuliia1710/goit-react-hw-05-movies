import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Li = styled.li`
  width: 225px;
`;

export const ImageThumb = styled.div`
  width: 100%px;
  height: 339px;
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: calc(16 / 14);
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #212121;

  :hover {
    color: brown;
  }
`;

export const TextBlock = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;
