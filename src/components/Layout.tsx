import React from 'react';
import Header from './Header';
import styled from 'styled-components';

interface LayoutProps {
  children?: React.ReactNode;
}

class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <Container data-testid="layout-container">
        {<Header />}
        {this.props.children}
      </Container>
    );
  }
}

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
