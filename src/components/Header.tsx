import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import TitleCurrentPosition from './TitleCurrentPosition';
import { useSelector } from 'react-redux';
import { RootState } from 'store/Store';

const Header: React.FC = () => {
  const { disableCurrentPosition } = useSelector((state: RootState) => state.news);

  return (
    <AppHeader>
      <NavLink to="/" className={'logo'}>
        RACOON digest
      </NavLink>

      {!disableCurrentPosition && <TitleCurrentPosition />}

      <HeaderNav>
        <HeaderNavLink to="/" data-testid="mainpage-link" end>
          Home
        </HeaderNavLink>
        <HeaderNavLink to="/about" data-testid="aboutpage-link">
          About
        </HeaderNavLink>
        <HeaderNavLink to="/form" data-testid="formpage-link">
          Form
        </HeaderNavLink>
      </HeaderNav>
    </AppHeader>
  );
};

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const HeaderNav = styled.nav`
  display: flex;
  gap: 30px;
`;

const HeaderNavLink = styled(NavLink)`
  transition: 0.3s all;

  &:hover {
    color: var(--primary);
  }

  &.active {
    color: var(--primary);
  }
`;

export default Header;
