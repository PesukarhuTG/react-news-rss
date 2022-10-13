import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  activeClassName = 'active-link';

  render() {
    return (
      <AppHeader>
        <NavLink to="/" className={'logo'}>
          RACOON digest
        </NavLink>

        <HeaderNav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? this.activeClassName : undefined)}
            data-testid="mainpage-link"
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? this.activeClassName : undefined)}
            data-testid="aboutpage-link"
          >
            About
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? this.activeClassName : undefined)}
            data-testid="contactspage-link"
          >
            Contacts
          </NavLink>
        </HeaderNav>
      </AppHeader>
    );
  }
}

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const HeaderNav = styled.nav`
  display: flex;
  margin-left: auto;
  gap: 30px;
`;

export default Header;
