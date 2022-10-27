import React from 'react';
import Header from './Header';
import styled from 'styled-components';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container data-testid="layout-container">
      {<Header />}
      {children}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`;

export default Layout;
